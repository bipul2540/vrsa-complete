import Marks from "../models/markSchema.js";

export const updateMarks = async (req, res) => {
  console.log(req.body);
  const { regNo, internal, external } = req.body;

  const student = await Marks.findOne({ regNo });

  if (student) {
    await Marks.updateOne(
      { regNo },
      {
        $set: {
          internal,
          external,
        },
      }
    );
  } else {
    const result = new Marks({
      regNo,
      internal,
      external,
    });

    await result.save();
  }

  res.status(200).json({ message: "successfully saved" });
  try {
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
