const { NotFound } = require("http-errors");
const { getContactById } = require("../../model");

const getById = async (req, res, next) => {
  const { contactId } = req.params;

  console.log(contactId);

  const contact = await getContactById(Number(contactId));

  console.log(contact);

  if (!contact) throw new NotFound(`Product with id=${contactId} not found`);

  res.status(200).json(contact);
};

module.exports = getById;
