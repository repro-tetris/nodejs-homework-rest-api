const mail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, MAIL_FROM } = process.env;

mail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: MAIL_FROM };
  try {
    await mail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
