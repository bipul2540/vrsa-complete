import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const validationSchema = Yup.object().shape({
  regNo: Yup.string().required("This field is required"),
});



export const marksValidation = Yup.object().shape({
  IA1: Yup.number().min(0).max(100),
  IA2: Yup.number().min(0).max(100),
  IA3: Yup.number().min(0).max(100),
  assingment: Yup.number().min(0).max(100),
  CIE: Yup.number().min(0).max(100),
});