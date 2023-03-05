import * as Yup from "yup";


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("FirstName is required !!")
    .min(3, "Min 3 charater are required !!"),
  lastName: Yup.string().required("LastName is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid Email !!!"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone number should contain 10 number ")
    .max(10, "too long"),
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
