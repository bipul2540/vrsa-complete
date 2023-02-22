import express from "express";
import { getContactMessage } from "./../controllers/contactUs.js";
import { body } from "express-validator";

const router = express.Router();

const nameValidation = body("name")
  .isLength({ min: 3 })
  .withMessage("name must be of 3 character")
  .matches(/^[A-Za-z\s]+$/)
  .withMessage("Name must be alphabetic");

const emailValidation = body("email").isEmail();

router.post("/message", nameValidation, emailValidation, getContactMessage);

export default router;
