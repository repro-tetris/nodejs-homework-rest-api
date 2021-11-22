const UUID = require("uuid-int");
const fs = require("fs/promises");
const path = require("path");

// шлях потрібен для збереження змін у списку контактів
const filePath = path.resolve("model/contacts.json");

// зберігаємо контакти тут
let contacts = require(filePath);

const listContacts = async () => contacts;

// вертає контакт з потрібним ID або undefined
const getContactById = async (contactId) =>
  contacts.find((contact) => contact.id === contactId);

// вертає видалений контакт або null. якщо контакта з таким Id не знайдено
const removeContact = async (contactId) => {
  const contact = await getContactById(contactId);

  if (!contact) return null;

  contacts = contacts.filter((c) => c.id !== contact.id);
  await saveContacts();
  return contact;
};

// вертає новий контакт з Id
const addContact = async (body) => {
  const newContact = { ...body, id: UUID(0).uuid() };
  contacts.push(newContact);
  await saveContacts();
  return newContact;
};

// вертає змінений контакт або null, якщо Id не знайдено
const updateContact = async (contactId, body) => {
  const idx = contacts.findIndex((i) => i.id === contactId);
  if (idx === -1) return null;

  contacts[idx] = { ...body, contactId };
  await saveContacts();
  return contacts[idx];
};

// зберегти всі зміни у файлі
const saveContacts = async () => {
  await fs.writeFile(filePath, JSON.stringify(contacts));
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
