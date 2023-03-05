import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  regNo: Yup.string().required("This field is required"),
  section: Yup.string().required("This field is required"),
  semester: Yup.string().required("This field is required"),
});
