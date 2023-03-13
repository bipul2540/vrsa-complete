import axios from "axios";

export const getMarksWithUsn = async (regNo: any) => {
  const reg = regNo.toLowerCase();
  try {
    const result = await axios.post("http://localhost:3001/api/marks/get/regNo", {
      regNo: reg,
    });
    return result.data;
  } catch (error) {
    return error.response;
  }
};
