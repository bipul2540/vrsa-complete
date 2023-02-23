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
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
  },
  section: {
    type: String,
    default: "",
  },
});

const Student = mongoose.model("students", studentSchema);

export default Student;
