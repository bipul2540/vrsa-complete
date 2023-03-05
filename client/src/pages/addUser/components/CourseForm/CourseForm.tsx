import { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaBook, FaUserGraduate } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Input from "../../../../components/Input/Input";
import SelectBox from "../../../../components/SelectBox/SelectBox";
import styles from "./CourseForm.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { setIn, useFormik } from "formik";
import { validationSchema } from "../../services/Validation/courseFormValidation";
import { toast, ToastContainer } from "react-toastify";
import {
  getStudentWithregNo,
  registerCourse,
} from "../../services/API/registerCourses";

const CourseForm = () => {
  const [inputValues, setInputValues] = useState([]);
  const [numInputs, setNumInputs] = useState(1);
  const handleAddInput = () => {
    setNumInputs(numInputs + 1);
    setInputValues([...inputValues, ""]);
  };
  const handleInputChange = (event: any, index: number) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const initialValues = {
    regNo: "",
    semester: "",
    section: "",
  };

  const [userAvailable, setUserAvialble] = useState(false);
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        for (var i = 0; i < inputValues.length; i++) {
          if (inputValues[i].length === 0) {
            toast.warn("🦄 Wow so easy!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        }

        const data = await registerCourse(values, inputValues);
        setUserAvialble(false);
      },
    });

  console.log("userAvailable", userAvailable);
  useEffect(() => {
    async function getStudent() {
      const data = await getStudentWithregNo(values.regNo);
      console.log(data);
      if (data.status === 200) {
        setUserAvialble(true);
      } else {
        setUserAvialble(false);
      }
    }
    getStudent();
  }, [values.regNo]);

  return (
    <div className={styles.main__container}>
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
      <h1 className={styles.heading}>
        <div className={styles.icon}>
          <FaBook />
        </div>
        Register Courses
      </h1>
      <form onSubmit={handleSubmit} className={styles.form__container}>
        {userAvailable ? (
          <p className={styles.userAvailable_warning}>
            This User is already exist on the database, if your try to change
            the{" "}
            <span className={styles.userAvailable_warning__span}>
              section or Semester{" "}
            </span>{" "}
            it will insert new value.
          </p>
        ) : null}
        <div className={styles.student__info}>
          <Input
            label='Reg No.'
            name='regNo'
            error={errors.regNo}
            err_msg={errors.regNo}
            handleBlur={handleBlur}
            handleChange={handleChange}
            required={true}
            touched={touched.regNo}
            value={values.regNo}
            key='regNo'
          />
          <div className={styles.semester__section}>
            <SelectBox
              label={"Semester"}
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
              name='semester'
              error={errors.semester}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched.semester}
              value={values.semester}
              key='semester'
            />
            <SelectBox
              label={"Section"}
              options={["A", "B", "C", "D", "E", "F", "G", "H", "I"]}
              name='section'
              error={errors.section}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched.section}
              value={values.section}
              key='section'
            />
          </div>
        </div>
        <p className={styles.course__entry__notes}>
          <span className={styles.span}>Note*</span> Enter the course in the
          format of Eg. <span>18XXX23</span>
        </p>
        <div className={styles.input__plus_add__container}>
          <div className={styles.style__container}>
            {Array.from({ length: numInputs }, (v, i) => (
              <div className={styles.course__entry__contaiener}>
                <label htmlFor='' className={styles.course__label}>
                  course-{i + 1}
                </label>
                <input
                  key={`${i}`}
                  type='text'
                  value={inputValues[i]}
                  onChange={(event) => handleInputChange(event, i)}
                  className={styles.added__input__field}
                />
              </div>
            ))}
          </div>

          <div className={styles.close__add__icons}>
            <p onClick={handleAddInput} className={styles.add__courses__btn}>
              <BsFillPlusCircleFill className={styles.add__icon} />
            </p>
          </div>
        </div>

        <button type='submit' className={styles.register__btn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
