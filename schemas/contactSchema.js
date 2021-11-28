const Joi = require("joi");
const myJoi = Joi.extend(require("joi-phone-number"));

const contactSchema = Joi.object({
  _id: myJoi.string(),
  name: myJoi.string().required(),
  email: myJoi.string().email().required(),
  phone: myJoi.string().phoneNumber().required(),
  favorite: myJoi.boolean().default(false),
});

module.exports = contactSchema;
