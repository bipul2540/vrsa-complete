import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 16,
  },
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  lastName: {
    type: String,
    max: 30,
  },

  roles: {
    type: String,
    required: true,
  },
  isVrified: {
    type: Boolean,
    default: false,
  },
  verificationString: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);

export default User;
