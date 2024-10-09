import dotenv from "dotenv";

dotenv.config();

const config = {
	nodeENV: process.env.NODE_ENV,
	port: process.env.PORT || 4000,
	dbURI: process.env.MONGO_URI,
	jwtSecret: process.env.JWT_SECRET,
	refreshSecret: process.env.JWT_SECRET,
	jwtAccessTime: process.env.JWT_ACCESS_TIME,
	accessTokenExpiresIn: process.env.JWT_ACCESS_TIME,
	refreshTokenExpiresIn: process.env.JWT_REFRESH_TIME,
	cookieExpireIn: process.env.JWT_COOKIE_EXPIRES_IN,
};

export default config;
