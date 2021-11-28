const fs = require("fs/promises");
const path = require("path");

const dbPath = path.resolve("db/contacts.json");

const listContacts = async () => {
  const raw = await fs.readFile(dbPath);

  return JSON.parse(raw);
};

module.exports = listContacts;
