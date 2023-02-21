import React from "react";
import InputError from "../../../../components/InputError/InputError";
import styles from "./FormPage.module.css";

type UserFormParams = {
  values: any;
  errors: any;
  handleChange: any;
  touched: any;
  handleBlur: any;
};

const FormPageOne = ({
  values,
  errors,
  handleChange,
  touched,
  handleBlur,
}: UserFormParams) => {
  return (
    <>
      <div className={styles.form__group}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          autoComplete='off'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputError
          isError={errors.email}
          isTouched={touched.email}
          err_msg={errors.email}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor='password'>Set password</label>
        <input
          type='password'
          autoComplete='off'
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputError
          isError={errors.password}
          isTouched={touched.password}
          err_msg={errors.password}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor='confirmPassword'>Confirm password</label>
        <input
          type='password'
          autoComplete='off'
          name='confirmPassword'
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputError
          isError={errors.confirmPassword}
          isTouched={touched.confirmPassword}
          err_msg={errors.confirmPassword}
        />
      </div>
    </>
  );
};

export default FormPageOne;
