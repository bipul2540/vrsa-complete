import express from "express";
import { getContactMessage } from "../controller/contactUs.js";
import contactUs from "../model/contactSchema.js";

const router = express.Router();
router.post("/contact-us/message", getContactMessage);

export default router;
