const fs = require("fs/promises");
// зберегти всі зміни у файлі
const filePath = "db/contacts.json";

const saveContacts = async (contacts) => {
  await fs.writeFile(filePath, JSON.stringify(contacts));
};

module.exports = saveContacts;
