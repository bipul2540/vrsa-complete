import axios from "axios";

export async function loginApi(values: any) {
  const { email, password } = values;

  try {
    const res = await axios.post("http://localhost:3001/api/user/login", {
      email,
      password,
    });

    console.log(res);
    const { token } = res.data;
    console.log(token);
    return res;
  } catch (err: any) {
    if (err) {
      console.log(err);
      return err.response;
    }
  }
}
