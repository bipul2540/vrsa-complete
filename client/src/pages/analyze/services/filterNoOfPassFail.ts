import { getCourseNameAndMarks } from "./marksUtility";

export const numberOfPassFail = async (course: any) => {
  const data = await getCourseNameAndMarks();

  var fail = 0;
  var pass = 0;
  data
    .filter((item) => {
      for (var i = 0; i < course.length; i++) {
        if (item.course_name && item.course_name === course[i].toLowerCase())
          return item;
      }
    })
    .map((item) => {
      if (item.total_marks < 33) {
        fail++;
      } else {
        pass++;
      }
    });

  return [pass, fail];
};

export const filterByMarks = async () => {

    
};
