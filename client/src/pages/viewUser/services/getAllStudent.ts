import axios from "axios";

export const getAllStudents = async () => {
  try {
    const result = await axios.get("http://localhost:3001/api/students/all");

    if (result.data) {
      return result.data.students;
    }
  } catch (error) {
    return error.response;
  }
};
