import { iteratorSymbol } from "immer/dist/internal";
import { getAllMarks } from "./getAllMarks";

export const courseName = async () => {
  const course = [];
  const marks = await getAllMarks();
  const val = marks
    .map((item) => {
      return item.marks;
    })
    .map((item) => {
      item.map((item) => {
        if (item && item.course_name) {
          course.push(item.course_name);
        }
      });
    });

  const uniq = [...new Set(course)];
  return uniq;
};

export const filterWithCourseName = async (courseName: string) => {
  const marks = await getAllMarks();

  const data = [];
  marks
    .map((item) => {
      return item.marks;
    })
    .map((item) => {
      item.filter((item) => {
        if (item && item.course_name) {
          if (item.course_name === courseName) {
            data.push(item);
          }
        }
      });
    });

  return data;
};

export const filterWithSemester = async (semester: string) => {
  const marks = await getAllMarks();

  const ans = marks.filter((item) => {
    if (item && item.semester === semester) {
      return item;
    }
  });

  return ans;
};

export const getCourseNameAndMarks = async () => {
  const marks = await getAllMarks();
  const ans = [];
  marks
    .map((item) => {
      return item.marks;
    })
    .map((item) => {
      item.map((item) => {
        if (item && item.course_name) {
          const total_marks =
            parseInt(
              item.internal_marks && item.internal_marks.firstIa
                ? item.internal_marks.firstIa
                : "0"
            ) +
            parseInt(
              item.internal_marks && item.internal_marks.secondIa
                ? item.internal_marks.secondIa
                : "0"
            ) +
            parseInt(
              item.internal_marks && item.internal_marks.thirdIa
                ? item.internal_marks.thirdIa
                : "0"
            ) +
            parseInt(item.assignment ? item.assingment : "0");

          const obj = {
            course_name: item.course_name,
            total_marks: total_marks,
          };
          ans.push(obj);
        }
      });
    });

  return ans;
};
