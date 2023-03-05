import StudentCourse from "../models/modal.studentCourseSchema.js";

export const registerStudentCoures = async (req, res) => {
  const { regNo, semester, section, courses } = req.body;
  try {
    const result = await StudentCourse.findOne({
      regNo,
      semester,
    });
    console.log(result);

    if (result) {
      const data = await StudentCourse.findOneAndUpdate(
        {
          regNo,
          semester,
        },
        {
          $addToSet: { courses: courses },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      await data.save();

      res.status(200).json({ message: data });
    } else {
      const data = new StudentCourse({
        regNo,
        semester,
        section,
        courses,
      });

      await data.save();

      res.status(200).json({ message: "new added" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStudentCourse = async (req, res) => {
  const { regNo, semester } = req.body;
  const reg = regNo.toUpperCase();

  const student = await StudentCourse.findOne({
    regNo: reg,
    semester,
  });
  if (student) {
    res.status(200).json({ data: student.courses });
  } else res.status(400).json({ message: "user not found" });
};
