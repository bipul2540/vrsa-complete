import axios from "axios";

export const getStudentWithUsn = async (regNo: any) => {
  try {
    const result = await axios.post(
      "http://localhost:3001/api/students/regNo",
      { regNo }
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
