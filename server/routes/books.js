import express from "express";
import { updateBooks, getBooksSemesterScheme } from "../controllers/books.js";

const router = express.Router();

router.post("/update-books", updateBooks);
router.post("/books", getBooksSemesterScheme);

export default router;
