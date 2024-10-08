import jwt from "jsonwebtoken";

import { promisify } from "util";
import AppError from "./../utils/appError.js";
import catchAsync from "./../utils/catchAsync.js";
import config from "../config/index.js";

import {
	createRefreshToken,
	verifyRefreshToken,
} from "../services/authService.js";

import User from "../models/userModel.js";

const models = {
	user: User,
	admin: User,
};

export const selectModelByRole = (req, res, next) => {
	const userRole = req.user.role.toLowerCase();
	const Model = models[userRole];

	if (!Model) {
		return next(new AppError("User role not recognized.", 401));
	}

	// Attach the selected model to the request object
	req.Model = Model;
	next();
};

export const protect = catchAsync(async (req, res, next) => {
	let token;

	// 1) Get the access token from headers or cookies
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt; // Support tokens from cookies for session-based auth
	}

	// If no access token is found, check for a refresh token
	if (!token) {
		const refreshToken = req.cookies.refreshToken;

		if (!refreshToken) {
			return next(
				new AppError("You are not logged in! Please log in to get access.", 401)
			);
		}

		// Verify the refresh token
		const decodedRefreshToken = await verifyRefreshToken(refreshToken);
		if (!decodedRefreshToken) {
			return next(
				new AppError(
					"Invalid or expired refresh token. Please log in again.",
					401
				)
			);
		}

		// Reissue a new access token if refresh token is valid
		const newAccessToken = await createRefreshToken(decodedRefreshToken);

		// Send the new access token as a cookie or response header
		res.cookie("jwt", newAccessToken, {
			httpOnly: true,
			secure: config.nodeENV === "production",
			expires: new Date(
				Date.now() + config.cookieExpireIn * 24 * 60 * 60 * 1000
			),
		});

		// Attach new access token to the request for further processing
		token = newAccessToken;
	}

	// 2) Verify the access token
	const decoded = await promisify(jwt.verify)(token, config.jwtSecret);

	// 3) Extract user ID and role from token
	const { id: userId, role: userRole } = decoded;

	// 4) Determine the model based on user role
	const Model = models[userRole];

	if (!Model) {
		return next(new AppError("User role not recognized.", 401));
	}

	// 5) Check if the user still exists
	const currentUser = await Model.findById(userId);
	if (!currentUser) {
		return next(
			new AppError("The user belonging to this token no longer exists.", 401)
		);
	}

	// 6) Check if the user has changed their password after token was issued
	if (
		currentUser.changePasswordAfter &&
		currentUser.changePasswordAfter(decoded.iat)
	) {
		return next(
			new AppError("User recently changed password! Please log in again.", 401)
		);
	}

	// 7) Attach user to the request object for further use
	req.user = currentUser;

	// 8) Proceed to the next middleware
	next();
});

// restrictTo is a Wrapper function to return the middleware function
export const restrictTo = (...roles) => {
	return (req, res, next) => {
		// roles is array: ['admin']

		if (!roles.includes(req.user.role)) {
			return next(
				new AppError("You do not have permission to perform this action.", 403)
			); // 403: Forbiden
		}

		next();
	};
};
