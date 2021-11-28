const UUID = require("uuid-int");

const listContact = require("./listContacts");
const saveContacts = require("./saveContacts");
// вертає новий контакт з Id
const addContact = async (body) => {
  const contacts = await listContact();
  const newContact = { ...body, id: UUID(0).uuid() };
  contacts.push(newContact);
  await saveContacts(contacts);
  return newContact;
};

module.exports = addContact;
