import axios from "axios";
import { setToken } from "../../../../util/useToken";

export async function postUser(values: any) {
  const { email, password, confirmPassword, firstName, lastName, roles } =
    values;
  try {
    const response = await axios.post(
      "http://localhost:3001/api/user/register",
      {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        roles,
      }
    );

    if (response.status == 200) {
      setToken(response.data.token);
    }

    return response;
  } catch (err: any) {
    if (err) {
      return err.response.status;
    }
  }
}
