import axios from "axios";

export const RegisterStudent = async (data: any) => {
  console.log(data);

  const {
    firstName,
    lastName,
    email,
    phone,
    gender,
    address,
    city,
    postal_code,
    state,
    country,
    regNo,
    section,
    semester,
    year,
    department,
  } = data;

  try {
    const res = await axios.post(
      "http://localhost:3001/api/students/register-student",
      {
        name: firstName + lastName,
        email,
        phone,
        address: {
          line1: address,
          city,
          postal_code,
          state,
          country,
        },

        gender,
        regNo,
        year,
        department,
        semester,
        section,
      }
    );

    return res;
  } catch (err) {
    return err.response;
  }
};
