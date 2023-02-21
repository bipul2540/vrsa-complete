import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 40,
  },
  email: {
    type: String,
    required: true,
    max: 50,
  },
  message: {
    type: String,
    required: true,
    max: 200,
  },
});

const contactUs = mongoose.model("vrsa-app", contactSchema, "contact-us");

export default contactUs;
