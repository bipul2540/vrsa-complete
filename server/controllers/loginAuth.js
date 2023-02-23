import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const uemail = req.body.email;
  const uPass = req.body.password;

  const user = await User.findOne({ email: uemail });

  if (!user) {
    return res.status(401).json({ message: "Email id is not registered with us. please create account" });
  }

  const { _id: id, email, password, isVerified, roles } = user;
  const isPasswordCorrect = await bcrypt.compare(uPass, password);

  if (isPasswordCorrect) {
    jwt.sign(
      {
        id: id.toString(),
        email,
        isVerified,
        roles,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) return res.status(500).json(err); // internal server error

        return res.status(200).json({ token });
      }
    );
  } else
    return res
      .status(401)
      .json({
        message: "Your email or password is incorrect, please try again",
      }); //unauthorized error
};
