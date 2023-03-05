import express from "express";
import {
  getStudentCourse,
  registerStudentCoures,
} from "../controllers/studentCourses.js";

const router = express.Router();

router.post("/register-student-courses", registerStudentCoures);

router.post("/reg/sem/course-enrolled", getStudentCourse);

export default router;
