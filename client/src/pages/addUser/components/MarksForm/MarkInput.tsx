import { setIn, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import ShowError from "../../../../components/ShowError/ShowError";
import { registerMarks } from "../../services/API/marksApi";
import { marksValidation } from "../../services/Validation/marksFormValidation";
import styles from "./MarksForm.module.css";

const MarkInput = ({ courses, regNo, semester }) => {
  const noOfCourses = courses.length;
  const [inputValues, setInputValues] = useState(
    courses.map((course: any) => ({
      course,
      IA1: "",
      IA2: "",
      IA3: "",
      assingment: "",
      total_IA: "",
      CIE: "",
    }))
  );

  const handleInputChange = (event: any, course: string, idx: any) => {
    const { name, value } = event.target;

    const newVal = inputValues.map((val: any, i: any) =>
      i === idx ? { ...val, [name]: value } : val
    );
    setInputValues(newVal);
    const avgVal = (
      (parseInt(inputValues[idx].IA2) +
        parseInt(inputValues[idx].IA1) +
        parseInt(inputValues[idx].IA3)) /
      3
    ).toFixed(3);
  };

  const [errror, setError] = useState(false);
  const initialValues = {};
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: marksValidation,
      onSubmit: async (values, action) => {},
    });
  console.log(inputValues);

  const HandleClickRegister = async () => {
    console.log("clicked");
    const data = await registerMarks(inputValues, regNo, semester);
    console.log(inputValues);
    if (data && data.status === 400) {
      setError(true);
    }
  };

  return (
    <form className={styles.input__container} onSubmit={handleSubmit}>
      {errror && (
        <ShowError
          err_msg='You have already entered the user marks please update the marks of the user'
          email=''
          setError={setError}
          link=''
        />
      )}
      <p>Enter the marks of the students </p>
      {courses.map((course: any, idx: any) => {
        return (
          <div className={styles.main__marks_input__contianer}>
            <h1 className={styles.input__label}>{course.toUpperCase()}</h1>
            <div className={styles.input__lines}>
              <div className={styles.first__line__input}>
                <input
                  type={"text"}
                  placeholder='IA-1'
                  name='IA1'
                  min='0'
                  className={styles.marks__field_input}
                  onChange={(e) => handleInputChange(e, course, idx)}
                  value={inputValues.IA1}
                />
                <input
                  type={"text"}
                  placeholder='IA-2'
                  name='IA2'
                  min='0'
                  className={styles.marks__field_input}
                  onChange={(e) => handleInputChange(e, course, idx)}
                  value={inputValues.IA2}
                />
                <input
                  type={"text"}
                  min='0'
                  placeholder='IA-3'
                  name='IA3'
                  className={styles.marks__field_input}
                  onChange={(e) => handleInputChange(e, course, idx)}
                  value={inputValues.IA3}
                />
              </div>
              <div className={styles.second__line__input}>
                <input
                  type={"text"}
                  min='0'
                  placeholder='Assing.'
                  name='assingment'
                  className={styles.marks__field_input}
                  onChange={(e) => handleInputChange(e, course, idx)}
                  value={inputValues.assingment}
                />
                <input
                  type={"text"}
                  min='0'
                  placeholder='Total-IA'
                  name='total_IA'
                  className={styles.marks__field_input}
                  onChange={(e) => handleInputChange(e, course, idx)}
                  value={parseInt(inputValues.IA1) + parseInt(inputValues.IA2)}
                  disabled
                />
                <input
                  type={"text"}
                  placeholder='CIE'
                  min='0'
                  name='CIE'
                  className={styles.marks__field_input}
                  onChange={(e) => handleInputChange(e, course, idx)}
                  value={inputValues.CIE}
                />
              </div>
            </div>
          </div>
        );
      })}

      <button
        type='button'
        onClick={HandleClickRegister}
        className={styles.register__btn}>
        Register
      </button>
    </form>
  );
};

export default MarkInput;
