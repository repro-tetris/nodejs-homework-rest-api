const { Schema, model } = require("mongoose");

const contactSchema = Schema({
  email: String,
  name: String,
  phone: String,
});

const Contact = model("contact", contactSchema);

module.exports = Contact;
