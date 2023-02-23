import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import google from "./../../../assets/png/google.png";
import { useFormik } from "formik";
import { validationSchema } from "./../services/validationSchema.js";
import { BiError } from "react-icons/bi";
import InputError from "../../../components/InputError/InputError";
import { loginApi } from "../services/API/loginApi";
import { useState } from "react";
import ShowError from "../../../components/ShowError/ShowError";

const initialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  const [isError, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        console.log(values);

        const res = await loginApi(values);
        console.log(res);

        if (res.status === 401) {
          setErrMsg(res.data.message);
          setError(true);
          action.resetForm();
        }
      },
    });

  return (
    <>
      {isError && <ShowError email='' err_msg={errMsg} setError={setError} />}
      <form className={styles.form__container} onSubmit={handleSubmit}>
        <div className={styles.form__group}>
          <label htmlFor='Email'>Email</label>
          <input
            type='text'
            autoComplete='off'
            name='email'
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          <InputError
            isError={errors.email}
            isTouched={touched.email}
            err_msg={errors.email}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor='Email'>Password</label>
          <input
            type='password'
            name='password'
            value={values.password}
            autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <InputError
            isError={errors.password}
            isTouched={touched.password}
            err_msg={errors.password}
          />
        </div>

        <div className={styles.chkbox__forget__options}>
          <div className='checkbox-wrapper-1'>
            <input
              id='example-1'
              className='substituted'
              type='checkbox'
              aria-hidden='true'
            />
            <label htmlFor='example-1'>Remember me</label>
          </div>
          <div className={styles.forgot__pass}>
            <Link to={"/forgotpassword"}>Forgot password ?</Link>
          </div>
        </div>

        <button type='submit' className={styles.login__btn}>
          Login
        </button>
      </form>

      <div className={styles.other__login__options}>
        <p className={styles.or}>or</p>
        <button className={styles.google__signin_btn}>
          <img className={styles.google__image} src={google} alt='' />
          Sign in with Google
        </button>
      </div>

      <div className={styles.login__option}>
        <p>
          did't have an account?
          <Link to='/create-account'>Create account</Link>{" "}
        </p>
      </div>
    </>
  );
}

export default LoginForm;
