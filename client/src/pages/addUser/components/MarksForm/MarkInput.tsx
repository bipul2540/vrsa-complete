import React, { useState } from "react";
import styles from "./MarksForm.module.css";

const MarkInput = ({ courseName }) => {
  const [inputValues, setInputValues] = useState([{}]);

  const handleInputChange = (event: any, index: string) => {
    const { name, value } = event.target;
    const newInputValues = [{ ...inputValues}, [name]: value ];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
    console.log(inputValues);
  };

  console.log(inputValues);

  const label = courseName.toUpperCase();
  return (
    <div className={styles.input__container}>
      <p className={styles.input__label}>{courseName.toUpperCase()}</p>
      <div className={styles.input__lines}>
        <div className={styles.first__line__input}>
          <input
            name='IA-1'
            type='text'
            className={styles.marks__field_input}
            placeholder='IA-1'
            onChange={(event) => handleInputChange(event, label)}
          />
          <input
            name='IA-2'
            type='text'
            className={styles.marks__field_input}
            placeholder='IA-2'
            onChange={(event) => handleInputChange(event, label)}
          />
          <input
            name='IA-3'
            type='text'
            className={styles.marks__field_input}
            placeholder='IA-3'
            onChange={(event) => handleInputChange(event, label)}
          />
        </div>

        <div className={styles.second__line__input}>
          <input
            name='assingment'
            type='text'
            className={styles.marks__field_input}
            placeholder='Assing.'
            onChange={(event) => handleInputChange(event, label)}
          />
          <input
            name='total_IA'
            type='text'
            className={styles.marks__field_input}
            placeholder='Total IA'
            onChange={(event) => handleInputChange(event, label)}
          />

          <input
            name='CIE'
            type='text'
            className={styles.marks__field_input}
            placeholder='CIE'
            onChange={(event) => handleInputChange(event, label)}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkInput;
