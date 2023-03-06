import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchVal, setSearchVal }) => {
  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };
  return (
    <div className={styles.search__design}>
      <input
        type='text'
        className={styles.search__field}
        placeholder='Search with USN'
        value={searchVal}
        onChange={handleChange}
      />
      <div className={styles.icon__field}>
        <FaSearch className={styles.search__icon} />
      </div>
    </div>
  );
};

export default SearchBox;
