const Contact = require("../../model/contact");

const getAll = async (req, res, next) => {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id });
  res.status(200).json(contacts);
};

module.exports = getAll;
