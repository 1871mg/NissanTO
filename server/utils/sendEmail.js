const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'nissan.service.78@gmail.com',
    pass: 'elbrus2021',
  },
});

const sendEmail = (to, subject, text) => {
  const mailData = {
    from: 'nissan.service.78@gmail.com',
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
