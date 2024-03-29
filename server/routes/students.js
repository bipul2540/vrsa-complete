import express from "express";
import { body } from "express-validator";
import {
  postStudent,
  getStudentsWithRegNo,
  getAllStudent,
} from "../controllers/students.js";

const router = express.Router();

const studentregisterValidator = [
  body("email").trim().isEmail(),
  body("name").trim(),
  body("line1").trim(),
  body("country").trim(),
];

router.post("/register-student", ...studentregisterValidator, postStudent);
router.get("/all", getAllStudent);
router.post("/regNo", getStudentsWithRegNo);

export default router;
