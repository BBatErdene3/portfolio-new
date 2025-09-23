import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    service: "smtp.sendgrid.net",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS,
    },
  });
  const mailOptions = {
    from: body.email,
    to: process.env.MY_EMAIL,
    subject: `Portfolio Contact Form: ${body.name}`,
    text: body.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Имэйл амжилттай илгээгдлээ!" };
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return { success: false, message: "Имэйл илгээхэд алдаа гарлаа." };
  }
});



