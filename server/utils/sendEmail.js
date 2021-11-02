const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kaminskiynikita1991@gmail.com',
    pass: '********',
  },
});

const sendEmail = (to, subject, text) => {
  const mailData = {
    from: 'kaminskiynikita1991@gmail.com',
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
