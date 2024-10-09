import express from "express";
import { getTotals } from "../controllers/totalController.js";

const router = express.Router();

router.get("/", getTotals);

export default router;
