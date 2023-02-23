import User from "../models/userSchema.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import { sendEmail } from "../util/sendEmail.js";

export const register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return res
      .status(403)
      .json({ message: "user already exist !!! please login again" });
  }

  const p1 = req.body.password;
  const p2 = req.body.confirmPassword;

  if (p1 !== p2) {
    return res.status(404).json({ message: "password doesn't match" });
  }

  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const pass = await bcrypt.hash(req.body.password, salt);
  const verificationString = uuid();

  const result = new User({
    email: req.body.email,
    password: pass,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    roles: req.body.roles,
    verificationString,
  });

  await result.save();

  const { _id } = result;
  const id = _id.toString();

  const email = req.body.email;

  try {
    jwt.sign(
      {
        id: id,
        email,
        isVerified: false,
        roles: req.body.roles,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return res.status(500).send("error");
        } else return res.status(200).json({ token });
      }
    );
    sendEmail({
      from: "robert.david2540@gmail.com",
      to: email,
      subject: "please verify your email",
      text: `Thanks for signing up to verify your email click here: http://localhost:5167/verify-email/${verificationString}`,
    });
  } catch (err) {
    return res.status(500).json({ msg: "error in sending mail" });
  }
};
