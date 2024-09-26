const listContacts = require("./contacts/listContacts");
const addContact = require("./contacts/addContact");
const saveContacts = require("./contacts/saveContacts");
const getContactById = require("./contacts/getContactById");
const removeContact = require("./contacts/removeContact");
const updateContact = require("./contacts/updateContact");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  saveContacts,
};
