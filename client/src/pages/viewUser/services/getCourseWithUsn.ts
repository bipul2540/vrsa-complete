import axios from "axios";

export const getCoursewithUSN = async (regNo: any) => {
  const reg = regNo.toLowerCase();
  try {
    const result = await axios.post("http://localhost:3001/api/courses/usn", {
      regNo: reg,
    });
    return result.data;
  } catch (error) {
    return error.response;
  }
};
