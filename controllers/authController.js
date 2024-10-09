import User from "../models/userModel.js";
import config from "../config/index.js";

import { checkFields } from "./handleFactory.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "./../utils/appError.js";

import { loginService, createRefreshToken } from "../services/authService.js";

export const login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	// 1) Check if email and password are provided
	if (!email || !password) {
		return next(new AppError("Please provide email and password", 400));
	}

	// 2) Verify user exists and check if the password is correct
	const user = await User.findOne({ email }).select("+password");

	if (!user || !(await user.correctPassword(password, user.password))) {
		return next(new AppError("Incorrect email or password", 401));
	}

	// 3) Generate and send tokens if everything is OK
	createSendToken(user, 200, res);
});

// CreateSendToken function (for both access and refresh tokens)
const createSendToken = async (user, statusCode, res) => {
	const accessToken = await loginService(user); // Create access token
	const refreshToken = createRefreshToken(user); // Generate refresh token

	// Validate and format cookie expiration date
	let refreshTokenExpiresInDays = config.refreshTokenExpiresIn;
	if (isNaN(refreshTokenExpiresInDays) || refreshTokenExpiresInDays <= 0) {
		// Default to 30 days if not properly configured // Default to 30 days if not properly configured
		refreshTokenExpiresInDays = 30;
	}

	// Set cookie options for refresh token (secure & httpOnly)
	const cookieOptions = {
		expires: new Date(
			Date.now() + refreshTokenExpiresInDays * 24 * 60 * 60 * 1000
		), // Convert days to milliseconds
		httpOnly: true, // Prevent JS access to cookie
		// secure: config.nodeENV === "production", // HTTPS only in production
		// sameSite: "strict", // CSRF protection
	};

	// Clear password from user object
	user.password = undefined;

	// Store refresh token in an HTTP-only cookie
	res.cookie("jwtRefreshToken", refreshToken, cookieOptions);

	// Send response with access token
	res.status(statusCode).json({
		status: "success",
		token: accessToken,
		doc: user,
	});
};

export const signup = catchAsync(async (req, res, next) => {
	// Use checkFields to filter out any invalid fields
	const { filteredData } = checkFields(User, req, next);

	const {
		firstName,
		lastName,
		email,
		password,
		identityType,
		identityNum,
		phone,
	} = filteredData;

	const newUser = await User.create({
		firstName,
		lastName,
		email,
		password,
		identityType,
		identityNum,
		phone,
	});

	createSendToken(newUser, 201, res);
});

export const logout = catchAsync(async (req, res, next) => {
	const user = req.user;

	// await removeRefreshToken(user._id.toString());

	// Clear the refreshToken cookie on the client
	res.clearCookie("jwt");

	res.status(200).json({
		status: "success",
		message: "Logout successfully",
	});
});

// export const forgotPassword = catchAsync(async (req, res, next) => {
// 	// 1) Get user based on posted email
// 	const email = req.body.email;
// 	const user = await Customer.findOne({ email });
// 	if (!user) {
// 		return next(new AppError("There is no user with that email address.", 404));
// 	}

// 	// 2) Generate the random reset token
// 	const resetToken = user.createPasswordResetToken();
// 	await user.save({ validateBeforeSave: false });

// 	// 3) Send it to user's email
// 	try {
// 		const resetURL = `http://localhost:3000/users/resetPassword/${resetToken}`;

// 		// Get the user's IP address
// 		const ipAddress = req.ip;
// 		const timestamp =
// 			new Date().toISOString().replace("T", " ").substring(0, 16) + " GMT";

// 		const message = createPasswordResetMessage(
// 			user.email,
// 			ipAddress,
// 			timestamp,
// 			resetURL
// 		);

// 		await sendEmail({
// 			email: user.email,
// 			subject: "Your password reset token (valid for 10 min)!",
// 			html: message,
// 		});

// 		res.status(200).json({
// 			status: "success",
// 			message: "Token sent to email!",
// 		});
// 	} catch (err) {
// 		user.passwordResetToken = undefined;
// 		user.passwordResetExpires = undefined;
// 		await user.save({ validateBeforeSave: false });

// 		return next(
// 			new AppError(
// 				"There was an error sending the email. Try again later!",
// 				500
// 			)
// 		);
// 	}
// });

// export const resetPassword = catchAsync(async (req, res, next) => {
// 	// 1) Create a hashedToken
// 	const { passwordNew, passwordConfirm } = req.body;

// 	if (passwordNew !== passwordConfirm) {
// 		return next(new AppError("Passwords not matched!", 400));
// 	}

// 	const hashedToken = crypto
// 		.createHash("sha256")
// 		.update(req.params.token)
// 		.digest("hex");

// 	// 2) Check the user exists and also check password reset expires is greater then current time
// 	const user = await Customer.findOne({
// 		passwordResetToken: hashedToken,
// 		passwordResetExpires: { $gt: Date.now() },
// 	});

// 	if (!user) {
// 		return next(new AppError("Token is invalid or has expired", 400));
// 	}

// 	// 3) Set email message
// 	const ipAddress = req.ip; // Get the user's IP address
// 	const timestamp =
// 		new Date().toISOString().replace("T", " ").substring(0, 16) + " GMT";

// 	const message = createPasswordResetConfirmationMessage(
// 		user.email,
// 		ipAddress,
// 		timestamp
// 	);

// 	// 3) Update the user properties & remove the unnecessary fields
// 	user.password = passwordNew;
// 	user.passwordResetToken = undefined;
// 	user.passwordResetExpires = undefined;
// 	await user.save();

// 	await sendEmail({
// 		email: user.email,
// 		subject: "Password Reset Confirmation",
// 		html: message,
// 	});

// 	createSendToken(user, 200, res);
// });

// export const updatePassword = catchAsync(async (req, res, next) => {
// 	// 1) Get the Model & find the user with including password
// 	const Model = req.Model;
// 	const user = await Model.findById(req.user._id).select("+password");

// 	// 2) Check the Posted current password is correct
// 	const correct = await user.correctPassword(
// 		req.body.passwordCurrent,
// 		user.password
// 	);

// 	if (!correct) {
// 		return next(new AppError("Your current password is wrong.", 401));
// 	}

// 	// 3) If so, update the password
// 	user.password = req.body.passwordNew;
// 	await user.save();

// 	// 4) send JWT
// 	createSendToken(user, 200, res);
// });
