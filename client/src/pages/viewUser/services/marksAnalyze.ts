import { useParams } from "react-router-dom";
import { getMarksWithUsn } from "./getMarksWithUsn";

export const marksAnalyze = async (regNo: any) => {
  const courseMakrks = await getMarksWithUsn(regNo);

  const marks = courseMakrks.result;
  const ans = [];
  const semster = [];

  marks.map((item: any) => {
    var totalIa = 0;
    semster.push(item.semester);
    item.marks.map((curr: any, idx: any) => {
      totalIa +=
        parseInt(curr.assingment ? curr.assingment : "0") +
        parseInt(curr.internal_marks.firstIa) +
        parseInt(curr.internal_marks.secondIa) +
        parseInt(curr.internal_marks.thirdIa);
    });
    ans.push(totalIa);
  });

  return [semster, ans];
};

export const TotalPercentage = async (regNo: any) => {
  const courseMakrks = await getMarksWithUsn(regNo);

  const marks = courseMakrks.result;
  const totalMarks = [];
  const semPercentage = {};
  marks.map((item: any) => {
    var totalIa = 0;
    var count = 0;
    item.marks.map((curr: any, idx: any) => {
      totalIa +=
        parseInt(curr.assingment ? curr.assingment : "0") +
        parseInt(curr.internal_marks.firstIa) +
        parseInt(curr.internal_marks.secondIa) +
        parseInt(curr.internal_marks.thirdIa);
      count++;
    });
    totalMarks.push(totalIa);

    semPercentage[item.semester] = ((totalIa / (count * 100)) * 100);
  });

  const percentArray: any = Object.values(semPercentage);

  var totalPerct = 0;
  for (var i = 0; i < percentArray.length; i++) {
    totalPerct += percentArray[i];
  }

  var avgPercent = totalPerct / percentArray.length;
  return [semPercentage, avgPercent];
};
