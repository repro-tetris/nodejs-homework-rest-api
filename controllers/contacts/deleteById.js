const { NotFound } = require("http-errors");
const { removeContact } = require("../../model");

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await removeContact(Number(contactId));

  if (!contact) throw new NotFound(`Product with id=${contactId} not found`);

  res.status(200).json(contact);
};

module.exports = deleteById;
