import express from "express";
import {
  getAllStudentMarks,
  getMarksWithUsn,
  updateMarks,
  updateMarksSubjectWise,
} from "../controllers/marks.js";

const router = express.Router();

router.post("/update-marks", updateMarks);

router.post("/get/regNo", getMarksWithUsn);

router.post("/update", updateMarksSubjectWise);

router.get("/all", getAllStudentMarks)

export default router;
