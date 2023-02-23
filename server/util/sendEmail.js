import nodemailer from "nodemailer";

export const sendEmail = (msg) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "robert.david2540@gmail.com",
      pass: "cwwmecgtyaxcbvlh",
    },
  });

  transporter.sendMail(msg, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
};
