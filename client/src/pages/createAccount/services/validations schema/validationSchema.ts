import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "password must be minimum of 8 character"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string(),
  roles: Yup.string().required("This field is compulsory"),
});
