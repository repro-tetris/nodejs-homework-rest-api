const { listContacts } = require("../../model");

const getAll = async (req, res, next) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
};

module.exports = getAll;
