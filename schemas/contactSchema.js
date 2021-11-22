const Joi = require("joi");
const myJoi = Joi.extend(require("joi-phone-number"));

const contactSchema = Joi.object({
  name: myJoi.string().required(),
  email: myJoi.string().email().required(),
  phone: myJoi.string().phoneNumber().required(),
});

module.exports = contactSchema;
