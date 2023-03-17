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
      assingment: item.assingment ? item.assingment : "",
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

export const getMarksWithUsn = async (req, res) => {
  const { regNo } = req.body;

  try {
    const result = await Marks.find({ regNo });
    res.status(200).json({ result });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Marks of these student is not been found" });
  }
};

export const updateMarksSubjectWise = async (req, res) => {
  const { values, course_name, regNo, semester } = req.body;

  console.log(req.body);
  const stud = await Marks.findOne({
    regNo,
    semester,
    "marks.course_name": course_name,
  });

  console.log(stud);

  if (stud) {
    const ans = await Marks.findOneAndUpdate(
      {
        regNo,
        semester,
        "marks.course_name": course_name,
      },
      {
        $set: {
          "marks.$.assingment": values.assingment,
          "marks.$.internal_marks.firstIa": values.ia1,
          "marks.$.internal_marks.secondIa": values.ia2,
          "marks.$.internal_marks.thirdIa": values.ia3,
        },
      }
    );

    res.status(200).json({ message: "success" });
  } else {
    res.status(400).json({ message: "Someting went wrong" });
  }
};

export const getAllStudentMarks = async (req, res) => {
  const marks = await Marks.find();

  res.status(200).json({ marks });

  console.log("len", marks.length);
};