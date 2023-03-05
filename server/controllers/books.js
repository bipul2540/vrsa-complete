import Books from "../models/model.bookSchema.js";

export const updateBooks = async (req, res) => {
  const { scheme, semester, books } = req.body;
  const book = await Books.findOne({ scheme, semester });

  try {
    if (book) {
      const respo = await Books.findOneAndUpdate(
        {
          semester: semester,
          scheme: scheme,
        },
        {
          $addToSet: {
            books,
          },
        }
      );
      res.status(200).json({ message: "inserted" });
    } else {
      const result = new Books({
        scheme,
        semester,
        books,
      });
      await result.save();
      res.status(200).json({ message: "successfull" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooksSemesterScheme = async (req, res) => {
  const { scheme, semester } = req.body;

  try {
    const book = await Books.findOne({ semester, scheme });
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ message: "book not found" });
  }
};
