import axios from "axios";

export async function sendMessageApi(values: any) {
  const { name, email, message } = values;
  try {
    const response = await axios.post(
      "http://localhost:3001/api/contact-us/message",
      {
        name,
        email,
        message,
      }
    );

    if (response.status == 200) {
      console.log(response.status);
    }

    return response;
  } catch (err: any) {
    if (err) {
      console.log(err.status);
      return err.response.status;
    }
  }
}
