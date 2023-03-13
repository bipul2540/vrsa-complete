import styles from "./EditMarks.module.css";
import { TiTick } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isMarksUpdated } from "../../../../store/slices/userSlice";
const EditMarks = ({ values, showEditModal, semester, setMarksUpdated }) => {
  console.log(values);

  const dispatch = useDispatch();

  const params = useParams();
  const handleCloseClick = () => {
    showEditModal(false);
  };

  const [inputValue, setInputValue] = useState({
    ia1: values.internal_marks.firstIa,
    ia2: values.internal_marks.secondIa,
    ia3: values.internal_marks.thirdIa,
    assingment: values.assingment,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleSubmit = () => {
    console.log(inputValue, values.course_name, params.regNo, semester);

    const updateMarks = async () => {
      const res = await axios.post("http://localhost:3001/api/marks/update", {
        course_name: values.course_name,
        regNo: params.regNo.toLowerCase(),
        semester,
        values: inputValue,
      });
      console.log(res);

      if (res.status === 200) {
        setUpdateSuccess(true);
        setMarksUpdated(true);
        dispatch(isMarksUpdated(true));

        setInputValue({
          ia1: "",
          ia2: "",
          ia3: "",
          assingment: "",
        });

        setTimeout(() => {
          showEditModal(false);
          setMarksUpdated(false);
          dispatch(isMarksUpdated(false));
        }, 5000);
      }
    };

    updateMarks();
  };

  return (
    <>
      {updateSuccess && (
        <p className={styles.marks__update_success}>
          Marks Updated SuccessFully !!!
        </p>
      )}
      <div className={styles.modal__container}>
        <div className={styles.header}>
          <h1 className={styles.edit__head}>Update Marks</h1>
          <h1 className={styles.close__iocn} onClick={handleCloseClick}>
            <IoIosClose />
          </h1>
        </div>

        <div className={styles.form__container}>
          <h1 className={styles.courses__name}>
            {values.course_name.toUpperCase()}
          </h1>

          <form action='' className={styles.input__fields}>
            <input
              type='text'
              placeholder='IA-1'
              value={inputValue.ia1}
              name='ia1'
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='IA-2'
              value={inputValue.ia2}
              name='ia2'
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='IA-3'
              value={inputValue.ia3}
              name='ia3'
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Assin.'
              value={inputValue.assingment}
              name='assingment'
              onChange={handleInputChange}
            />
            <div className={styles.icon__div} onClick={handleSubmit}>
              <TiTick className={styles.icon} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditMarks;
