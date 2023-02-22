import contactusSchema from "../models/contactSchema.js";

import { validationResult } from "express-validator";

export const getContactMessage = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const data = new contactusSchema({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    data.save();
    res.status(200).send({ message: "successfull" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
