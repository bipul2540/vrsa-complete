import axios from "axios";

export const getCourse = async (regNo: any, semester: any) => {
  try {
    const result = await axios.post(
      "http://localhost:3001/api/courses/reg/sem/course-enrolled",
      {
        regNo,
        semester,
      }
    );

    return result;
  } catch (error) {
    return error;
  }
};
