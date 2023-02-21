import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { validationSchema } from "../../services/validatationSchema";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const initialValues = { name: "", email: "", message: "" };

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={styles.form__container}>
      <div className={styles.form__info}>
        <h1>Get in touch.</h1>
        <p>
          We love to hear from you, Our friendly team is always here to help
          you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.form__group}>
              <label className={styles.label} htmlFor='name'>
                Name
              </label>
              <Field
                type='text'
                id='name'
                name='name'
                className={styles.form__control}
                autoComplete='off'
                placeholder=' '
              />

              <ErrorMessage
                name='name'
                className={styles.error}
                component='div'
              />
            </div>
            <div className={styles.form__group}>
              <label className={styles.label} htmlFor='email'>
                Email
              </label>
              <Field
                type='email'
                id='email'
                name='email'
                className={styles.form__control}
                autoComplete='off'
                placeholder=' '
              />

              <ErrorMessage
                name='email'
                className={styles.error}
                component='div'
              />
            </div>
            <div className={styles.form__group}>
              <label className={styles.label} htmlFor='message'>
                Write your issue
              </label>
              <Field
                as='textarea'
                id='message'
                name='message'
                className={styles.form__control}
                autoComplete='off'
                placeholder=' '
              />

              <ErrorMessage
                name='message'
                className={styles.error}
                component='div'
              />
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className={styles.submit__button}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
