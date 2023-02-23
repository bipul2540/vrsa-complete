import express from "express";
import { updateMarks } from "../controllers/marks.js";

const router = express.Router();

router.get("/update-marks", updateMarks);

export default router;
