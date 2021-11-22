const { addContact } = require("../../model");

const add = async (req, res) => {
  const contact = await addContact(req.body);
  res.status(201).json(contact);
};

module.exports = add;
