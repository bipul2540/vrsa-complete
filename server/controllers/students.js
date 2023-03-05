import Student from "./../models/studentsSchema.js";

export const postStudent = async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    gender,
    regNo,
    year,
    department,
    semester,
    section,
  } = req.body;

  const user = await Student.findOne({ regNo });

  if (user) {
    return res.status(401).json({ message: "user already exist" });
  }

  try {
    const result = new Student({
      name,
      email,
      phone,
      address,
      gender,
      regNo,
      year,
      department,
      semester,
      section,
    });

    await result.save();
    res.status(200).json({ message: "Student has been successfully added." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getStudentsWithRegNo = async (req, res) => {
  const regNo = req.params.regNo;
  console.log(regNo);
  const student = await Student.findOne({ regNo });

  if (student) {
    res
      .status(200)
      .json({
        regNo: student.regNo,
        semester: student.semester,
        section: student.section,
      });
  } else {
    res.status(400).json({ message: "user not found" });
  }
};
