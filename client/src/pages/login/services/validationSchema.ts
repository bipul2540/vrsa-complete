import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be Valid")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
