const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const secret = config.get("secret");

exports.verifyAuth = async (req, ress, next) => {
  let token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({ msg: "Invalid Token" });
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ msg: "Unauthorized!" });
    } else {
      req.user = user;
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
