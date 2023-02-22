import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import InputError from "../../../../components/InputError/InputError";
import { validationSchema } from "../../services/validatationSchema";
import styles from "./ContactForm.module.css";
import { sendMessageApi } from "./../../services/API/sendMessageApi.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type props = {
  isSuccessForm: boolean;
  setSuccessForm: any;
};

function ContactForm({ isSuccessForm, setSuccessForm }: props) {
  const initialValues = { name: "", email: "", message: "" };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        await sendMessageApi(values).then((res) => {
          console.log(res);

          if (res.status === 200) {
            setSuccessForm(true);
            action.resetForm();
            window.scroll
          }

          if (res === 429) {
            toast.warn(
              "Too many attempts, please try again after some time !!"
            );
            action.resetForm();
          }
        });
      },
    });

  return (
    <div className={styles.form__container}>
      <ToastContainer />
      <div className={styles.form__info}>
        <h1>Get in touch.</h1>
        <p>
          We love to hear from you, Our friendly team is always here to help
          you.
        </p>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <div className={styles.form__group}>
          <label htmlFor='name' className={styles.label}>
            Name
          </label>
          <input
            type='text'
            name='name'
            className={styles.form__control}
            autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <InputError
            isError={errors.name}
            isTouched={touched.name}
            err_msg={errors.name}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            type='text'
            name='email'
            className={styles.form__control}
            autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <InputError
            isError={errors.email}
            isTouched={touched.email}
            err_msg={errors.email}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor='message' className={styles.label}>
            Message
          </label>
          <textarea
            name='message'
            className={styles.form__control}
            autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <InputError
            isError={errors.message}
            isTouched={touched.message}
            err_msg={errors.message}
          />
        </div>

        <button type='submit' className={styles.submit__button}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
