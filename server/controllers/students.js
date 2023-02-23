import Student from "./../models/studentsSchema.js";

export const postStudent = async (req, res) => {
  const {
    name,
    email,
    phone,
    line1,
    city,
    postal_code,
    state,
    country,
    gender,
    regNo,
    year,
    department,
    semester,
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
      address: {
        line1,
        city,
        postal_code,
        state,
        country,
      },
      gender,
      regNo,
      year,
      department,
      semester,
    });

    await result.save();
    res.status(200).json({ message: "Student has been successfully added." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getStudents = async (req, res) => {
  const data = await Student.find();

  res.status(200).json({ data: data });
};
