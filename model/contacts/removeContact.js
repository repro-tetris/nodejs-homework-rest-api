const listContacts = require("./listContacts");
const saveContacts = require("./saveContacts");

// вертає видалений контакт або null. якщо контакта з таким Id не знайдено
const removeContact = async (contactId) => {
  let contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);

  if (!contact) return null;

  contacts = contacts.filter((c) => c.id !== contact.id);
  await saveContacts(contacts);
  return contact;
};

module.exports = removeContact;
