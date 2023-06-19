const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  fullName: String,
  email: String,
  phone: Number,
  password: String,
  block: { type: Boolean, default: false },
  userRole: { type: String, roles: ["user", "admin", "seller"] },
  picture: {
    type: String,
    default:
      "https://res.cloudinary.com/dqzabjiql/image/upload/v1686873266/unisex-avatar_elic5q.png",
  },
});

module.exports = mongoose.model("User", userSchema);
