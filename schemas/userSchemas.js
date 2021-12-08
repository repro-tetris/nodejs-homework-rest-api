const Joi = require("joi");

const loginUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = { loginUserSchema, registerUserSchema };
