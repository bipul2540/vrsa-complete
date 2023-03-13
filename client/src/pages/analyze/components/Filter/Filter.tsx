import { useState, useEffect } from "react";
import { BsFilterCircleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { GrFormNext, GrFormNextLink } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { courseName } from "../../services/marksUtility";
import CheckBox from "./CheckBox";
import styles from "./Filter.module.css";
import FilterByCourse from "./FilterByCourse";
import FilterByMarks from "./FilterByMarks";

const Filter = () => {
  const [searchVal, setSearchVal] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showCourseFilter, setShowCourseFilter] = useState(false);
  const handleShowFilter = () => {
    setShowFilter(!showFilter);

    if (showCourseFilter) {
      setShowCourseFilter(!showCourseFilter);
    }
  };

  const handleShowCourseFilter = () => {
    setShowCourseFilter(!showCourseFilter);

    if (showFilter) {
      setShowFilter(!showFilter);
    }
    if (showCourseFilter === false) {
      setSearchVal("");
    }
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      const course = await courseName();
      setCourses(course);
    };
    getCourse();
  }, []);

  const handleSearchChange = (e: any) => {
    setSearchVal(e.target.value);
  };

  return (
    <>
      <div className={styles.main__container_filter}>
        <div
          className={`${styles.filter__icon_div} ${
            showFilter && styles.changeColor
          } `}
          onClick={handleShowFilter}>
          <BsFilterCircleFill className={styles.filter__icon} /> <p>Marks</p>
        </div>
        <div
          className={`${styles.filter__icon_div} ${
            showCourseFilter && styles.changeColor
          } `}
          onClick={handleShowCourseFilter}>
          <BsFilterCircleFill className={styles.filter__icon} /> <p>Course</p>
        </div>

        <div className={styles.search__bar}>
          <input type='text' className={styles.search__field} />
          <FaSearch className={styles.search__icon} />
        </div>
      </div>

      <FilterByMarks showFilter={showFilter} key='0' />

      <FilterByCourse
        courses={courses}
        handleSearchChange={handleSearchChange}
        searchVal={searchVal}
        showCourseFilter={showCourseFilter}
        setShowCourseFilter={setShowCourseFilter}
        key='1'
      />
    </>
  );
};

export default Filter;
