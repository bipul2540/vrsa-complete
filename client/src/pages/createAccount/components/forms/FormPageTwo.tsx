import React from "react";
import InputError from "../../../../components/InputError/InputError";
import styles from "./FormPage.module.css";
import { useSpring, animated } from "react-spring";

type UserFormParams = {
  values: any;
  errors: any;
  handleChange: any;
  touched: any;
  handleBlur: any;
};

const FormPageTwo = ({
  values,
  errors,
  handleChange,
  touched,
  handleBlur,
}: UserFormParams) => {
  const translate = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0)" },
  });

  return (
    <animated.div style={translate}>
      <div className={styles.name__container}>
        <div className={`${styles.form__group} ${styles.f__name}`}>
          <label htmlFor=''>First name</label>
          <input
            type='text'
            autoComplete='off'
            name='firstName'
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputError
            isError={errors.firstName}
            isTouched={touched.firstName}
            err_msg={errors.firstName}
          />
        </div>
        <div className={`${styles.form__group} ${styles.l__name}`}>
          <label htmlFor='lastName'>Last name</label>
          <input
            type='text'
            autoComplete='off'
            name='lastName'
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputError
            isError={errors.lastName}
            isTouched={touched.lastName}
            err_msg={errors.lastName}
          />
        </div>
      </div>

      <div className={styles.form__group}>
        <label className={styles.select__label} htmlFor='roles'>
          Choose a role
        </label>
        <select
          name='roles'
          id='roles'
          className={styles.roles__input__field}
          value={values.roles}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='-----'>
          <option value='' selected disabled hidden>
            --------select--------
          </option>
          <option value='student'>student</option>
          <option value='teacher'>Teacher</option>
          <option value='HOD'>HOD(head of department)</option>
          <option value='principal'>Principal</option>
        </select>
        <InputError
          isError={errors.roles}
          isTouched={touched.roles}
          err_msg={errors.roles}
        />
      </div>
    </animated.div>
  );
};

export default FormPageTwo;
