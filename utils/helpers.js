import mongoose from "mongoose";
import catchAsync from "./catchAsync";

export const checkReferenceId = catchAsync(async (Model, foreignKey, next) => {
	const referenceKey = await mongoose.model(Model).findById(foreignKey);
	if (!referenceKey) {
		return next(
			new AppError(`Referenced ${Model.toLowerCase()} ID does not exist`, 400)
		);
	}
});
