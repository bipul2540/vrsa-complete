import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { MdOutlinePersonSearch } from "react-icons/md";
import { number } from "yup";
import Input from "../../../../components/Input/Input";
import SelectBox from "../../../../components/SelectBox/SelectBox";
import ShowError from "../../../../components/ShowError/ShowError";
import { getBooks } from "../../services/API/getBooks";
import { getCourse } from "../../services/API/marksApi";
import { validationSchema } from "../../services/Validation/marksFormValidation";
import MarkInput from "./MarkInput";
import styles from "./MarksForm.module.css";
import loading from "./../../../../assets/gif/book.gif";
const MarksFrom = () => {
  const initialValues = {
    regNo: "",
    semester: "",
    subject: "",
  };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {},
    });

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks(2018, values.semester);

      if (response) {
        if (response.data.book) {
          setBooks(response.data.book.books);
        }
      }
    };

    fetchBooks();
  }, [values.semester]);

  const subjects = [];

  if (books) {
    books.map((book) => {
      subjects.push(`${book.code}`);
    });
  }

  const [disableInput, setdisableInput] = useState(false);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);
  const handleSearchClick = async () => {
    if (values.regNo.length === 0) {
      touched.regNo = true;
      errors.regNo = "value required";
    } else {
      touched.regNo = false;
      const result = await getCourse(values.regNo, values.semester);
      console.log(result);
      if (result.data && result.status === 200) {
        setCourses(result.data.data);
        if (result.data.data) {
          setdisableInput(true);
        }
        setError(false);
        setAnimate(true);
      }
      if (result.response.status === 400) {
        setError(true);
      }
    }
  };

  const [showAnime, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(false);
  }, 10000);


  return (
    <div className={styles.main__container}>
      <h1 className={styles.heading}>
        <div className={styles.icon}>
          <BsBookmarkStarFill />
        </div>
        Register Marks
      </h1>
      <div className={styles.form__container}>
        <div className={styles.findStudent__form}>
          <Input
            name='regNo'
            label='Registeration No.'
            required={true}
            error={errors.regNo}
            handleBlur={handleBlur}
            handleChange={handleChange}
            err_msg={errors.regNo}
            touched={touched.regNo}
            value={values.regNo}
          />
          <div className={styles.sem__search}>
            <SelectBox
              label={"semester"}
              name='semester'
              error={errors.semester}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched.semester}
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
              value={values.semester}
            />

            <div
              className={styles.search__register__course}
              onClick={handleSearchClick}>
              <MdOutlinePersonSearch className={styles.search__icon} />
            </div>
          </div>
        </div>

        {showAnime ? (
          <div className={styles.book__animation}>
            <img src={loading} alt='' />
          </div>
        ) : (
          <div className={styles.marks__entry__group}>
            {courses.length !== 0 && !error ? (
              courses.map((item) => {
                return (
                  <MarkInput
                    courseName={item}
                  />
                );
              })
            ) : (
              <p className={styles.instruction}>
                Search with the student USN and Semester to Enter the Marks
              </p>
            )}

            {error ? (
              <ShowError
                email={values.regNo}
                err_msg='User with  this registration number is not found please register the user first and then add the marks'
                setError={setError}
              />
            ) : null}
            {courses.length !== 0 ? (
              <p className={styles.register__btn}>Register</p>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarksFrom;
