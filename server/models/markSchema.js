import mongoose from "mongoose";

const inernalSubSchema = {
  subject_name: String,
  internal_marks: Number,
  assingment_marks: Number,
};
const externalSubSchema = {
  subject_name: String,
  external_marks: Number,
};

const markSchema = mongoose.Schema({
  regNo: {
    type: String,
    required: true,
  },
  internal: {
    firstInternal: [inernalSubSchema],
    secondInternal: [inernalSubSchema],
    thirdInternal: [inernalSubSchema],
  },
  external: [externalSubSchema],
});

const Marks = mongoose.model("student-marks", markSchema);
export default Marks;
