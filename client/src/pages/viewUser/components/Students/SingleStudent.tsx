import React from "react";
import styles from "./Students.module.css";
import girl from "./../../../../assets/png/girl.png";
import boy from "./../../../../assets/png/boy.png";
import { useNavigate } from "react-router-dom";

const SingleStudent = ({
  id,
  name,
  regNo,
  Branch,
  section,
  year,
  gender,
  phone,
  email,
  semester,
}) => {
  const branch = Branch.split("(");
  const namesplit = name.split(" ");

  const navigate = useNavigate();


  const handleClick = () => {
    navigate(`/teacher/home/view-user/${regNo}`);
  };
  return (
    <tr onClick={handleClick}>
      <td>{id + 1}</td>
      <td className='image__name'>
        <img src={gender === "male" ? boy : girl} alt=''></img>{" "}
        <p>{namesplit[0]}</p>
      </td>
      <td>{regNo}</td>
      <td>{branch[0]}</td>
      <td>{semester}</td>
      <td>{year}</td>
      <td>{gender}</td>
      <td>{phone ? phone : "----"}</td>
      <td>{email}</td>
    </tr>
  );
};

export default SingleStudent;
