const express = require("express");

const UserController = require("../controller/users");

const router = express.Router();

router.get("/", UserController.getUsers);

router.post("/", UserController.postUsers);

module.exports = router;
