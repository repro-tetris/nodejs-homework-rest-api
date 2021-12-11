const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../middlewares/controllerWrapper");
const userController = require("../../controllers/users");
const auth = require("../../middlewares/auth");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "tmp");
  },
  filename: function (req, file, cb) {
    cb(null, `${req.user._id}-${file.originalname}`);
  },
});
const upload = multer({ storage });

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

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  controllerWrapper(userController.setAvatar)
);

module.exports = router;
