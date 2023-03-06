import mongoose from "mongoose";

const courses = {
  course_name: String,
  internal_marks: {
    firstIa: String,
    secondIa: String,
    thirdIa: String,
  },
  assingment: String,
  external_marks: String,
};

const markSchema = mongoose.Schema({
  regNo: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  marks: [courses],
});

const Marks = mongoose.model("student-marks", markSchema);
export default Marks;
