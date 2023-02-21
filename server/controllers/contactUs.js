import contactUs from "../model/contactSchema.js";

export const getContactMessage = (req, res) => {
  console.log(req.body);
  try {
    const data = new contactUs({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    data.save();
    res.status(200).send({ message: "successfull" });
   
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
