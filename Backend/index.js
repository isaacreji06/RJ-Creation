const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
require("dotenv").config()
const PORT=process.env.PORT
const nodemailer=require("nodemailer")
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: 'isaacreji006@gmail.com',
    subject: subject || 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ success: false, error: 'Failed to send email.' });
  }
});

app.listen(PORT,()=>{
    console.log(`The app is listening at the port: ${PORT}`)
})