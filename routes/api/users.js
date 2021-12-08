const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../middlewares/controllerWrapper");
const userController = require("../../controllers/users");
const auth = require("../../middlewares/auth");

const {
  loginUserSchema,
  registerUserSchema,
} = require("../../schemas/userSchemas");
const validation = require("../../middlewares/validation");

router.post(
  "/login",
  validation(loginUserSchema),
  controllerWrapper(userController.login)
);

router.post(
  "/signup",
  validation(registerUserSchema),
  controllerWrapper(userController.register)
);

router.get("/current", auth, controllerWrapper(userController.getCurrent));

router.get("/logout", auth, controllerWrapper(userController.logout));

module.exports = router;
