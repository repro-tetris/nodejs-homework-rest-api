const { Conflict } = require("http-errors");
const User = require("../../model/user");
const sendVerifyEmail = require("../../utils/sendVerifyEmail");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const newUser = new User({ name, email });
  newUser.setPassword(password);
  newUser.createAvatar();
  verificationToken = newUser.createVerificationToken();
  await newUser.save();

  await sendVerifyEmail(email, verificationToken);

  res.status(201).json({
    email,
    name,
    verificationToken,
  });
};

module.exports = register;
