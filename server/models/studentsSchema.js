import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 30,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },

  address: {
    line1: String,
    city: String,
    postal_code: Number,
    state: String,
    country: String,
  },

  gender: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    default: "",
    required: true,
  },
});

const Student = mongoose.model("students", studentSchema);

export default Student;
