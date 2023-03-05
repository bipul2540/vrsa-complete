import mongoose from "mongoose";

const studentCourseSchema = mongoose.Schema({
  regNo: {
    type: String,
    required: true,
    max: 16,
  },
  semester: {
    required: true,
    type: String,
    max: 5,
  },

  section: {
    required: true,
    type: String,
    max: 1,
  },
  courses: {
    type: [String],
    required: true,
  },
});

const StudentCourse = mongoose.model("student-course", studentCourseSchema);

export default StudentCourse;
