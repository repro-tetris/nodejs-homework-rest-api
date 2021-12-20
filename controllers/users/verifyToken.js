const { NotFound } = require("http-errors");

const User = require("../../model/user");

const verifyToken = async (req, res) => {
  const { verificationToken } = req.params;
  console.log(verificationToken);
  const user = await User.findOne({ verifyToken: verificationToken });
  if (!user) {
    throw NotFound();
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verifyToken: null,
  });

  res.status(200).json({ message: "Verification successful" });
};

module.exports = verifyToken;
