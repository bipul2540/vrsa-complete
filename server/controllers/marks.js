import Marks from "../models/markSchema.js";

export const updateMarks = async (req, res) => {
  const { regNo, semester, value } = req.body;

  const reg = regNo.toLowerCase();
  const marks = await Marks.findOne({ regNo: reg, semester });

  const val = value.map((item) => {
    return {
      course_name: item.course,
      internal_marks: {
        firstIa: item.IA1 ? item.IA1 : "",
        secondIa: item.IA2 ? item.IA2 : "",
        thirdIa: item.IA3 ? item.IA3 : "",
      },
      assingment: item.assignment ? item.assignment : "",
      external_marks: item.CIE ? item.CIE : "",
    };
  });

  if (marks) {
    return res
      .status(400)
      .json({ message: "user alredy found please update marks" });
  } else {
    const data = new Marks({
      regNo: reg,
      semester,
      marks: val,
    });

    await data.save();
    res.status(200).json({ message: "updated into the marks" });
  }
};
