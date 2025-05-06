// oawz qaef zkqh wpdv
//import nodemailer
const nodemailer = require("nodemailer");

async function sendMail() {
  // CreateTransport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yadao.pragati08@gmail.com",
      pass: "oawzqaefzkqhwpdv",
    },
  });

  // Configure email

  const mailOptions = {
    from: "yadao.pragati08@gmail.com",
    to: "dhirajkumbhare0@gmail.com",
    subject: "Greeting Good night!",
    text: "Hello dudu,  How are you baby? I kow you are missing me. I miss you too baby :( I will be there soon. Till then take care of my baby and have a good night nd sweetest dreams! I love you DUDU",
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully !!");
  } catch (err) {
    console.log("error sending the email: ", err);
  }
}

sendMail();
