import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
// import helmet from "helmet";
// import ExpressMongoSanitize from "express-mongo-sanitize";

import connectDB from "./config/db.js";
import globalErrorHandler from "./controllers/errorController.js";
import AppError from "./utils/appError.js";

import router from "./routes/index.js";
// import allowedOrigins from "./config/origins.js";

const port = process.env.PORT || 5000;

// const corsOptions = {
// 	origin: function (origin, callback) {
// 		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
// 			callback(null, true);
// 		} else {
// 			callback(new Error("Not allowed by CORS"));
// 		}
// 	},
// 	// Some legacy browsers choke on 204
// 	optionsSuccessStatus: 200,
// };

const corsOptions = {
	// Allows all origins, CORS will reflect the requesting origin
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};

connectDB();

const app = express();

// Security headers first
// app.use(helmet());
// CORS setup before request handling
app.use(cors(corsOptions));
// Parse JSON request body early
app.use(express.json());
// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
// Parse cookies before using them (e.g., for auth)
app.use(cookieParser());
// Sanitize the request after body and cookies are parsed
// app.use(ExpressMongoSanitize());

// Developing logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.get("/", (req, res) => {
	res.status(200).json({
		status: "success",
		message: "❇️ DHA API is running successfully",
		timestamp: new Date().toISOString(),
		version: "1.0.0",
	});
});

// Route end point
app.use("/api", router);

// Unhandle Routes Handling Middleware
app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

app.listen(port, () => {
	console.log(`
  🚀 Server is up and running!
  🌐 URL: http://localhost:${port}
  🛠️  Environment: ${process.env.NODE_ENV || "development"}
  📅  Started at: ${new Date().toLocaleString()}
  `);
});
