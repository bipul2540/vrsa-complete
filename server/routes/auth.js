import express from "express";
import { register } from "../controllers/registerAuth.js";
import { body } from "express-validator";
import { login } from "../controllers/loginAuth.js";

const router = express.Router();

const registerValidators = [
  body("email").trim().isEmail(),
  body("password")
    .exists({ checkFalsy: true })
    .trim()
    .withMessage("password Must Enter"),

  body("confirmPassword")
    .exists({ checkFalsy: true })
    .trim()
    .custom((value, { req }) => value === req.body.password)
    .withMessage("This password do not match"),

  body("firstName").exists({ checkNull: true }).isLength({ min: 3 }).trim(),
  body("lastName").trim(),

  body("roles").trim().isAlpha().withMessage("only alphabetic are required"),
];

router.post("/register", ...registerValidators, register);

const loginValidators = [
  body("email").trim().isEmail(),
  body("password")
    .exists({ checkFalsy: true })
    .trim()
    .withMessage("password Must Enter"),
];

router.post("/login", ...loginValidators, login);

export default router;
