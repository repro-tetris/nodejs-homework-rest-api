const listContacts = require("./listContacts");
const saveContacts = require("./saveContacts");

// вертає змінений контакт або null, якщо Id не знайдено
const updateContact = async (contactId, body) => {
  const contacts = await listContacts();

  const idx = contacts.findIndex((i) => i.id === contactId);
  if (idx === -1) return null;

  contacts[idx] = { ...body, id: contactId };
  await saveContacts(contacts);
  return contacts[idx];
};

module.exports = updateContact;
