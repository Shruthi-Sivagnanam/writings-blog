const express = require("express");
const {
  signup,
  login,
  update_profile,
} = require("../controllers/userController");
const router_user = express.Router();

router_user.route("/signup").post(signup);
router_user.route("/login").post(login);
router_user.route("/update").post(update_profile);

module.exports = router_user;
