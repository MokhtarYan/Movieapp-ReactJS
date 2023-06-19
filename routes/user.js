const express = require("express");
const { registerRules, validatorr } = require("../middlewares/validator");
const {
  register,
  login,
  getAllusers,
  updatePass,
  updateUser,
  getPass,
} = require("../controllers/user.controller");
const { verifyAuth } = require("../middlewares/verifyAuth");

const router = express.Router();

router.post("/register", registerRules(), validatorr, register);
router.post("/login", login);
router.get("/auth", verifyAuth);
router.get("/allUsers", getAllusers);
router.post("/getPassword", getPass);
router.put("/updateUser/:_id", updateUser);
module.exports = router;
