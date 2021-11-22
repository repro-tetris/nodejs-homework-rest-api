const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../middlewares/controllerWrapper");
const getAll = require("../../controllers/contacts/getAll");
const getById = require("../../controllers/contacts/getById");
const deleteById = require("../../controllers/contacts/deleteById");
const add = require("../../controllers/contacts/add");
const updateById = require("../../controllers/contacts/updateById");
const contactSchema = require("../../schemas/contact");
const validation = require("../../middlewares/validation");

router.get("/", controllerWrapper(getAll));

router.get("/:contactId", controllerWrapper(getById));

router.post("/", validation(contactSchema), controllerWrapper(add));

router.delete("/:contactId", controllerWrapper(deleteById));

router.put(
  "/:contactId",
  validation(contactSchema),
  controllerWrapper(updateById)
);

module.exports = router;
