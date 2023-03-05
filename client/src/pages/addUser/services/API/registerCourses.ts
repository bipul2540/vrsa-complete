import axios from "axios";

export const registerCourse = async (values: any, inputValues: any) => {
  const { regNo, semester, section } = values;

  try {
    const result = await axios.post(
      "http://localhost:3001/api/courses/register-student-courses",
      { regNo, semester, section, courses: inputValues }
    );

    return result;
  } catch (error) {
    return error.response;
  }
};

export const getStudentWithregNo = async (regNo: any) => {
  try {
    const result = await axios.post(
      `http://localhost:3001/api/students/${regNo}`,
      {
        regNo,
      }
    );

    return result;
  } catch (error) {
    return error.response;
  }
};
