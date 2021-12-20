const { NotFound, BadRequest } = require("http-errors");
const User = require("../../model/user");
const sendVerifyEmail = require("../../utils/sendVerifyEmail");

const verify = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    throw BadRequest("missing required field email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw NotFound();
  }

  if (user.verify) throw BadRequest("Verification has already been passed");
  else sendVerifyEmail(email, user.verifyToken);
  res.status(200).json({ message: "Verification email sent" });
};

module.exports = verify;
