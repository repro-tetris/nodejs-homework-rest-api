const { NotFound } = require("http-errors");
const Contact = require("../../model/contact");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!contact) throw new NotFound(`Product with id=${contactId} not found`);

  res.status(200).json(contact);
};

module.exports = updateById;
