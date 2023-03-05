import mongoose from "mongoose";

const bookSubSchema = {
  code: {
    type: String,
    unique: true,
  },
  name: String,
};

const subjectSchema = mongoose.Schema({
  scheme: {
    type: String,
    required: true,
  },
  semester: String,
  books: [bookSubSchema],
});

const Books = mongoose.model("books", subjectSchema);
export default Books;
