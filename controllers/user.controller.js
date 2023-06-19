const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const User = require("../model/User");
const { sendConfirmationMail } = require("../nodemailer");

exports.register = async (req, res) => {
  const { fullName, email, password, phone, userRole } = req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(409).json({ msg: "User already exists" });
  } else {
    try {
      const newUser = new User({
        fullName,
        email,
        password,
        phone,
        userRole,
      });
      let salt = await bcryptjs.genSalt(10);
      let hash = await bcryptjs.hash(password, salt);
      newUser.password = hash;

      await newUser.save();
      const payload = {
        _id: newUser._id,
      };

      let token = jwt.sign(payload, secret);

      res.send({
        token,
        user: {
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          userRole: newUser.userRole,
        },
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Wrong Informations" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "Wrong Informations" });
    const payload = {
      _id: user._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        userRole: user.userRole,
        block: user.block,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.auth = async (req, res) => {
  res.send(req.user);
};
exports.getAllusers = async (req, res) => {
  try {
    const allUsers = await ser.find();
    allUsers
      ? res.stats(201).jsn(allUsers)
      : res.status(401).json({ msg: "getAllUsers error" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getPass = async (req, res) => {
  try {
    const { email } = req.body;
    const userForgotPass = await User.find({ email });

    if (userForgotPass != []) {
      res.status(201).send(userForgotPass);
    } else {
      res.status(404).json({ msg: "The email is not found!" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(updatedUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
