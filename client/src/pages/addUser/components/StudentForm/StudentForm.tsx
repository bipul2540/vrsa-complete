import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FaStarOfLife, FaUserGraduate } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import AnimatedButton from "../../../../components/AnimatedButton/AnimatedButton";
import RegisterSuccess from "../../../../components/FormRegisterComponents/RegisterSuccess/RegisterSuccess";
import Input from "../../../../components/Input/Input";
import SelectBox from "../../../../components/SelectBox/SelectBox";
import { RegisterStudent } from "../../services/API/registerStudent";
import { validationSchema } from "../../services/Validation/studentFormValidation";
import styles from "./StudentForm.module.css";

const StudentForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal_code: "",
    state: "",
    country: "",
    regNo: "",
    section: "",
    year: "",
    department: "",
    semester: "",
    gender: "",
  };

  const [isRegisterSuccess, setRegisterSuccess] = useState(false);

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        const res = await RegisterStudent(values);
        console.log(res);
        if (res.status === 200) {
          setRegisterSuccess(true);
          action.resetForm();
        }
        if (res.status === 401) {
          toast.error("This USN is  already registered !!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
            theme: "dark",
          });

          errors.regNo = "this RegNo is already registered";
        }
      },
    });

  const departmentName = [
    "CSE(computer science and engineering)",
    "IS(information science)",
    "civil engineering",
    "mechanical Engineering",
  ];

  useEffect(() => {
    if (isRegisterSuccess) {
      document.getElementsByTagName("body")[0].classList.add("disable-scroll");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("disable-scroll");
    }
  }, [isRegisterSuccess]);

  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      {isRegisterSuccess && (
        <RegisterSuccess setRegisterSuccess={setRegisterSuccess} />
      )}
      <div className={styles.main__container}>
        <h1 className={styles.heading}>
          <div className={styles.icon}>
            <FaUserGraduate />
          </div>
          Register student
        </h1>
        <form className={styles.form__container} onSubmit={handleSubmit}>
          <div className={styles.first_and_lastName}>
            <Input
              name='firstName'
              label='FirstName'
              required={true}
              value={values.firstName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.firstName}
              err_msg={errors.firstName}
              error={errors.firstName}
            />
            <Input
              name='lastName'
              label='LastName'
              required={true}
              value={values.lastName}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.lastName}
              err_msg={errors.lastName}
              error={errors.lastName}
            />
          </div>
          <div className={styles.email_and_phone}>
            <Input
              name='email'
              label='Email'
              required={false}
              value={values.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.email}
              err_msg={errors.email}
              error={errors.email}
            />
            <Input
              name='phone'
              label='Phone'
              required={false}
              value={values.phone}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.phone}
              err_msg={errors.phone}
              error={errors.phone}
            />
          </div>

          <SelectBox
            label='Gender'
            name='gender'
            error={errors.gender}
            touched={touched.gender}
            handleBlur={handleBlur}
            handleChange={handleChange}
            value={values.gender}
            options={["male", "female"]}
          />

          <Input
            name='address'
            label='Address'
            required={false}
            value={values.address}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.address}
            err_msg={errors.address}
            error={errors.address}
          />

          <div className={styles.city__postal}>
            <Input
              name='city'
              label='City'
              required={false}
              value={values.city}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.city}
              err_msg={errors.city}
              error={errors.city}
            />
            <Input
              name='postal_code'
              label='Postal code'
              required={false}
              value={values.postal_code}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.postal_code}
              err_msg={errors.postal_code}
              error={errors.postal_code}
            />
          </div>
          <Input
            name='state'
            label='State'
            required={false}
            value={values.state}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.state}
            err_msg={errors.state}
            error={errors.state}
          />

          <Input
            name='country'
            label='country'
            required={false}
            value={values.country}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.country}
            err_msg={errors.country}
            error={errors.country}
          />

          <div className={styles.register__section}>
            {" "}
            <Input
              name='regNo'
              label='Registration No.'
              required={true}
              value={values.regNo}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.regNo}
              err_msg={errors.regNo}
              error={errors.regNo}
            />
            <Input
              name='section'
              label='section'
              required={true}
              value={values.section}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.section}
              err_msg={errors.section}
              error={errors.section}
            />
          </div>

          <div className={styles.year__depart__sem}>
            <SelectBox
              label='Year'
              name='year'
              value={values.year}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.semester}
              error={errors.year}
              options={[1, 2, 3, 4]}
            />
            <SelectBox
              name='department'
              label='Department'
              value={values.department}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.department}
              error={errors.department}
              options={departmentName}
            />
            <SelectBox
              name='semester'
              label='Semester'
              value={values.semester}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched.semester}
              error={errors.semester}
              options={[
                "1st",
                "2nd",
                "3rd",
                "4rth",
                "5th",
                "6th",
                "7th",
                "8th",
              ]}
            />
          </div>

          <div className={styles.btn}>
            <AnimatedButton color={""} />
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
