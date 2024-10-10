import dotenv from "dotenv";

dotenv.config();

// JWT_SECRET=myCarRentalJwt2024
// JWT_REFRESH_SECRET=carRentalJwtRefresh2024
// JWT_ACCESS_TIME=15d
// JWT_REFRESH_TIME=15d

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
