import { FcGlobe } from "react-icons/fc";
import { getCourseNameAndMarks } from "./marksUtility";

export const failPass = async () => {
  const data = await getCourseNameAndMarks();
  var fail = 0;
  var pass = 0;
  data.map((item) => {
    if (item.total_marks < 33) {
      fail++;
    } else {
      pass++;
    }
  });

  return [pass, fail];
};
