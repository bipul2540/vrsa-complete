import axios from "axios";

export const getBooks = async (scheme: any, semester: any) => {
  try {
    const result = await axios.post("http://localhost:3001/api/books/books", {
      scheme,
      semester,
    });

    return result;
  } catch (error) {
    return error.response;
  }
};
