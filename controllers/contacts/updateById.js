const { NotFound } = require("http-errors");
const { updateContact } = require("../../model");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await updateContact(Number(contactId), req.body);
  if (!contact) throw new NotFound(`Product with id=${contactId} not found`);

  res.status(200).json(contact);
};

module.exports = updateById;
