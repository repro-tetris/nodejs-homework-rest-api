const { NotFound } = require("http-errors");
const Contact = require("../../model/contact");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  if (!favorite)
    throw new NotFound(`Contact with id=${contactId} missing field favorite`);

  const contact = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );

  if (!contact) throw new NotFound(`Contact with id=${contactId} not found`);

  res.status(200).json(contact);
};

module.exports = updateFavorite;
