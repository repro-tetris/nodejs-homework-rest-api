const sendEmail = require("./sendEmail");

const sendVerifyEmail = async (email, token) => {
  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="http://localhost:3000/users/verify/${token}">Verify email</a>`,
  };

  await sendEmail(mail);
};

module.exports = sendVerifyEmail;
