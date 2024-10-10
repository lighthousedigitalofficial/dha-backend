import jwt from "jsonwebtoken";

const config = {
	jwtSecret: process.env.JWT_SECRET,
	refreshSecret: process.env.JWT_REFRESH_SECRET,
	jwtAccessTime: process.env.JWT_ACCESS_TIME,
	accessTokenExpiresIn: process.env.JWT_ACCESS_TIME,
	refreshTokenExpiresIn: process.env.JWT_REFRESH_TIME,
};

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
		return jwt.verify(token, config.refreshSecret);
	} catch (err) {
		return null;
	}
};
