import jwt from "jsonwebtoken";
import config from "../config/index.js";

// Generate access token service
export const loginService = async (user) => {
	return jwt.sign({ id: user._id, role: user.role }, config.jwtSecret, {
		expiresIn: config.jwtAccessTime,
	});
};

// Generate refresh token service
export const createRefreshToken = (user) => {
	return jwt.sign({ id: user._id, role: user.role }, config.refreshSecret, {
		expiresIn: config.refreshTokenExpiresIn,
	});
};

export const verifyRefreshToken = (token) => {
	try {
		return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
	} catch (err) {
		return null;
	}
};
