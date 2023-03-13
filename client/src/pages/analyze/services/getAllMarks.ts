import axios from "axios";

export const getAllMarks = async () => {
  try {
    const marks = await axios.get("http://localhost:3001/api/marks/all");

    return marks.data.marks;
  } catch (error) {
    return error.response;
  }
};
