const User = require("../../model/user");
const fs = require("fs").promises;
const path = require("path");
var Jimp = require("jimp");

const avatarsDir = path.join(process.cwd(), "public/avatars");

const setAvatar = async (req, res, next) => {
  const { _id } = req.user;

  console.log(req.file);

  const { path: tmpFile, filename } = req.file;
  const targetFile = path.join(avatarsDir, filename);
  const avatarURL = path.join("avatars", filename);
  try {
    Jimp.read(tmpFile, (err, img) => {
      if (err) throw err;
      img.resize(250, Jimp.AUTO).write(targetFile);
    });
    await User.findByIdAndUpdate(_id, { avatarURL });
  } catch (error) {
    await fs.unlink(tmpFile);
    return next(error);
  }

  res.status(200).json({ avatarURL });
};

module.exports = setAvatar;
