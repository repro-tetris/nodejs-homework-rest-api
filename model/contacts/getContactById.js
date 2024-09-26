const listContacts = require("./listContacts");

// вертає контакт з потрібним ID або undefined
const getContactById = async (contactId) => {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === contactId);
};

module.exports = getContactById;
