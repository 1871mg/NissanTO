const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: `${process.env.EMAIL_LOGIN}`,
    pass: `${process.env.EMAIL_PASS}`,
  },
});

const sendEmail = (to, subject, text) => {
  const mailData = {
    from: `${process.env.EMAIL_LOGIN}`,
    to,
    subject,
    text,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    return console.log({ message: 'Mail Send', message_id: info.messageId });
  });
};

module.exports = sendEmail;
