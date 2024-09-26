const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../middlewares/controllerWrapper");
const contactController = require("../../controllers/contacts");
const contactSchema = require("../../schemas/contactSchema");
const validation = require("../../middlewares/validation");

router.get("/", controllerWrapper(contactController.getAll));

router.get("/:contactId", controllerWrapper(contactController.getById));

router.post(
  "/",
  validation(contactSchema),
  controllerWrapper(contactController.add)
);

router.delete("/:contactId", controllerWrapper(contactController.deleteById));

router.put(
  "/:contactId",
  validation(contactSchema),
  controllerWrapper(contactController.updateById)
);

module.exports = router;
