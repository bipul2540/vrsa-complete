import styles from "./CreateAccountForm.module.css";
import student from "./../../../../assets/png/graduate-cap.png";

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useMultiStepForm } from "../../services/useMultiStepForm/useMultiStepForm";
import FormPageOne from "../forms/FormPageOne";
import FormPageTwo from "../forms/FormPageTwo";
import Button from "../../../../components/Button/Button";
import { useFormik } from "formik";
import { validationSchema } from "../../services/validations schema/validationSchema";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { postUser } from "./../../services/API/postUser";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import ShowError from "../../../../components/ShowError/ShowError";
import LinkVerificationModal from "../linkVerification/LinkVerificationModal";

import { useSpring, animated } from "react-spring";
import { getUser } from "../../../../util/useToken";

const CreateAccountForm = () => {
  const translate = useSpring({ opacity: 1, from: { opacity: 0 } });

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    roles: "",
  };

  const navigate = useNavigate();
  const [isError, setError] = useState(false);
  const [emailVal, setEmailval] = useState("");
  const [loginSuccessPage, setLoginSuccessPage] = useState(false);

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        await postUser(values).then((res) => {
          setEmailval(values.email);
          if (res === 403) {
            navigate("/create-account");
            goTo(0);
            setError(true);
            action.resetForm();
          }

          if (res.status === 200) {
            action.resetForm();
            setLoginSuccessPage(true);
          }
        });
      },
    });

  const { steps, currentStepIndex, step, goTo, back } = useMultiStepForm([
    <FormPageOne
      values={values}
      errors={errors}
      handleChange={handleChange}
      touched={touched}
      handleBlur={handleBlur}
    />,
    <FormPageTwo
      values={values}
      errors={errors}
      handleChange={handleChange}
      touched={touched}
      handleBlur={handleBlur}
    />,
  ]);

  const handleNextClick = () => {
    if (
      errors.email ||
      errors.password ||
      errors.confirmPassword ||
      values.email === "" ||
      values.password === "" ||
      values.confirmPassword === ""
    ) {
      toast.error("Please fill the correct data!!! ");
    } else {
      goTo(1);
    }
  };

  return (
    <>
      <div className={styles.main__container}>
        <ToastContainer />
        <div className={styles.heading}>
          <h1>
            <img src={student} alt='' />
            Create an account
          </h1>
          <p>Get started with an account on vrsa.</p>
        </div>
        {/* backend errro */}

        {isError && (
          <animated.div style={translate}>
            <ShowError
              setError={setError}
              email={emailVal}
              err_msg='Email id is already registered, please login'
            />
          </animated.div>
        )}

        {/* end */}
        <form className={styles.form__control} onSubmit={handleSubmit}>
          {step}
          <div className={styles.back__next_btn}>
            {currentStepIndex !== 0 ? (
              <p className={styles.goto__page_btn} onClick={() => back()}>
                <span>
                  <GrFormPreviousLink className={styles.icon} />
                </span>
                Back{" "}
              </p>
            ) : null}

            {currentStepIndex !== 1 ? (
              <p className={styles.goto__page_btn} onClick={handleNextClick}>
                Next{" "}
                <span>
                  <GrFormNextLink className={styles.icon} />
                </span>{" "}
              </p>
            ) : (
              <button className={styles.goto__page_btn_register} type='submit'>
                Register
              </button>
            )}
          </div>
        </form>
      </div>

      {loginSuccessPage && <LinkVerificationModal />}
    </>
  );
};

export default CreateAccountForm;
