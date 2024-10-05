import mongoose from "mongoose";
import slugify from "slugify";

import APIFeatures from "../utils/apiFeatures.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

// Check Document fields if they exisit it return data body
// And if not it return Error
export const checkFields = (Model, req, next) => {
	// Step 1: Get the allowed fields from the model schema
	const allowedFields = Object.keys(Model.schema.paths);

	// Step 2: Identify fields in req.body that are not in the allowedFields list
	const extraFields = Object.keys(req.body).filter(
		(field) => !allowedFields.includes(field)
	);

	// Step 3: If extra fields are found, send an error response
	if (extraFields.length > 0) {
		next(
			new AppError(
				`These fields are not allowed: ${extraFields.join(", ")}`,
				400
			)
		);
		return { allowedFields: [], filteredData: {} };
	}

	// Step 4: Proceed with filtering the valid fields
	const filteredData = Object.keys(req.body).reduce((obj, key) => {
		if (allowedFields.includes(key)) {
			obj[key] = req.body[key];
		}
		return obj;
	}, {});

	return { allowedFields, filteredData };
};

// DELETE One Document
export const deleteOne = (Model) =>
	catchAsync(async (req, res, next) => {
		const doc = await Model.findByIdAndDelete(req.params.id).exec();

		const docName = Model.modelName.toLowerCase() || "Document";

		// Handle case where the document was not found
		if (!doc) {
			return next(new AppError(`No ${docName} found with that ID`, 404));
		}

		res.status(204).json({
			status: "success",
			doc: null,
		});
	});

// UPDATE One Document
export const updateOne = (Model) =>
	catchAsync(async (req, res, next) => {
		let { allowedFields = [], filteredData = {} } = checkFields(
			Model,
			req,
			next
		);

		// if document contain slug then create a slug
		if (allowedFields.includes("slug")) {
			if (filteredData.name) {
				filteredData = {
					...filteredData,
					slug: slugify(filteredData.name, { lower: true }),
				};
			} else
				filteredData = {
					...filteredData,
					slug: slugify(filteredData.title, { lower: true }),
				};
		}

		// Perform the update operation
		const doc = await Model.findByIdAndUpdate(req.params.id, filteredData, {
			new: true,
			runValidators: true,
		});

		const docName = Model.modelName.toLowerCase() || "Document";

		// Handle case where the document was not found
		if (!doc) {
			return next(new AppError(`No ${docName} found with that ID`, 404));
		}

		res.status(200).json({
			status: "success",
			doc,
		});
	});

// CREATE One Document
export const createOne = (Model) =>
	catchAsync(async (req, res, next) => {
		let { allowedFields = [], filteredData = {} } = checkFields(
			Model,
			req,
			next
		);

		// if document contain slug then create a slug
		if (allowedFields.includes("slug")) {
			if (filteredData.name) {
				filteredData = {
					...filteredData,
					slug: slugify(filteredData.name, { lower: true }),
				};
			} else
				filteredData = {
					...filteredData,
					slug: slugify(filteredData.title, { lower: true }),
				};
		}

		const doc = await Model.create(filteredData);

		const docName = Model.modelName || "Document";

		if (!doc) {
			return next(new AppError(`${docName} could not be created`, 400));
		}

		res.status(201).json({
			status: "success",
			doc,
		});
	});

// GET One Document
export const getOne = (Model, popOptions) =>
	catchAsync(async (req, res, next) => {
		// If not in cache, fetch from database
		let query = Model.findById(req.params.id);

		if (popOptions && popOptions.path) query = query.populate(popOptions);
		const doc = await query;

		const docName = Model.modelName.toLowerCase() || "Document";

		if (!doc) {
			return next(new AppError(`No ${docName} found with that ID`, 404));
		}

		res.status(200).json({
			status: "success",
			doc,
		});
	});

// GET All Documents
export const getAll = (Model, popOptions) =>
	catchAsync(async (req, res, next) => {
		// EXECUTE QUERY
		let query = Model.find();

		// If popOptions is provided and path is an array or a string, populate the query
		if (popOptions?.path) {
			if (Array.isArray(popOptions.path)) {
				popOptions.path.forEach((pathOption) => {
					query = query.populate(pathOption);
				});
			} else {
				query = query.populate(popOptions);
			}
		}
		// If not in cache, fetch from database

		const features = new APIFeatures(query, req.query)
			.filter()
			.sort()
			.fieldsLimit()
			.paginate();

		const doc = await features.query;

		res.status(200).json({
			status: "success",
			results: doc.length,
			doc,
		});
	});

export const getOneBySlug = (Model, popOptions) =>
	catchAsync(async (req, res, next) => {
		// If not in cache, fetch from database
		let query = Model.findOne({ slug: req.params.slug });

		if (popOptions && popOptions?.path) query = query.populate(popOptions);
		const doc = await query;

		const docName = Model.modelName.toLowerCase() || "Document";

		if (!doc) {
			return next(new AppError(`No ${docName} found with that slug`, 404));
		}

		res.status(200).json({
			status: "success",
			doc,
		});
	});

export const deleteOneWithTransaction = (Model, relatedModels = []) =>
	catchAsync(async (req, res, next) => {
		const session = await mongoose.startSession();
		session.startTransaction();

		try {
			const doc = await Model.findById(req.params.id).session(session);

			if (!doc) {
				await session.abortTransaction();
				return next(
					new AppError(
						`No ${Model.modelName.toLowerCase()} found with that ID`,
						404
					)
				);
			}

			// Delete related documents in a transaction
			for (const relatedModel of relatedModels) {
				const { model, foreignKey } = relatedModel;
				await model
					.deleteMany({ [foreignKey]: req.params.id })
					.session(session);
			}

			// Delete the main document
			await doc.deleteOne({ session });

			// Commit the transaction
			await session.commitTransaction();
			session.endSession();

			res.status(204).json({
				status: "success",
				doc: null,
			});
		} catch (err) {
			await session.abortTransaction();
			session.endSession();
			return next(new AppError("Something went wrong during deletion", 500));
		}
	});

// UPDATE One Document
export const updateStatus = (Model) =>
	catchAsync(async (req, res, next) => {
		if (!req.body.status) {
			return next(new AppError(`Please provide status value.`, 400));
		}

		// Perform the update operation
		const doc = await Model.findByIdAndUpdate(
			req.params.id,
			{ status: req.body.status },
			{
				new: true,
				runValidators: true,
			}
		);

		const docName = Model.modelName.toLowerCase() || "Document";

		// Handle case where the document was not found
		if (!doc) {
			return next(new AppError(`No ${docName} found with that ID`, 404));
		}

		res.status(200).json({
			status: "success",
			doc,
		});
	});
