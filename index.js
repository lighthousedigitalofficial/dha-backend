import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env" });

import connectDB from "./config/db.js";
import globalErrorHandler from "./controllers/errorController.js";
import AppError from "./utils/appError.js";

import router from "./routes/index.js";

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Developing logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).send("DHA api is running...");
});

// Route end point
app.use("/api", router);

// Unhandle Routes Handling Middleware
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
