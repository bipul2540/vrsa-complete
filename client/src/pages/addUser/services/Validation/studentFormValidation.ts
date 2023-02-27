import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("FirstName is required !!")
    .min(3, "Min 3 charater are required !!"),
  lastName: Yup.string().required("LastName is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid Email !!!"),
  phone: Yup.number(),
  postal_code: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6)
    .max(6),
  regNo: Yup.string().required("Reg No. is required !!"),
  section: Yup.string().required("Section is required field"),
  year: Yup.string().required("year is required !!"),
  department: Yup.string().required("Department name is required !!"),
  semester: Yup.number().required("Semester is required !!"),
});
