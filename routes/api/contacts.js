const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../middlewares/controllerWrapper");

const contactController = require("../../controllers/contacts");
const contactSchema = require("../../schemas/contactSchema");
const validation = require("../../middlewares/validation");
const auth = require("../../middlewares/auth");

router.get("/", controllerWrapper(contactController.getAll));

router.get("/:contactId", auth, controllerWrapper(contactController.getById));

router.post(
  "/",
  auth,
  validation(contactSchema),
  controllerWrapper(contactController.add)
);

router.delete(
  "/:contactId",
  auth,
  controllerWrapper(contactController.deleteById)
);

router.put(
  "/:contactId",
  auth,
  validation(contactSchema),
  controllerWrapper(contactController.updateById)
);

router.patch(
  "/:contactId/favorite",
  auth,
  validation(contactSchema),
  controllerWrapper(contactController.updateFavorite)
);

module.exports = router;
