import mongoose from "mongoose";

const mark = mongoose.Schema({
  subject: {
    type: String,
    unique: true,
  },

  marks: {
    type: Number,
  },
});

const marksSchema = mongoose.Schema({
  regNo: {
    type: String,
    required: true,
  },
  section: String,
  subjectMarks: [mark],
});

const Marks = mongoose.model("marks", marksSchema);
export default Marks;
