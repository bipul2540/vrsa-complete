import axios from "axios";

export const getCourse = async (regNo: any, semester: any) => {
  const reg = regNo.toUpperCase();
  try {
    const result = await axios.post(
      "http://localhost:3001/api/courses/reg/sem/course-enrolled",
      {
        regNo: reg,
        semester,
      }
    );

    return result;
  } catch (error) {
    return error;
  }
};

export const registerMarks = async (value: any, regNo: any, semester: any) => {
  console.log(regNo);
  console.log(semester);
  console.log(value);

  try {
    const result = await axios.post(
      "http://localhost:3001/api/marks/update-marks",
      {
        regNo,
        semester,
        value,
      }
    );
    console.log(result);

    return result;
  } catch (error) {
    return error.response;
  }
};