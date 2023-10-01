const express = require("express");

const userController = require("../controllers/user_controller");

const user_router = express.Router();

user_router.get("/", userController.getUsers);

user_router.post("/register", userController.register);

user_router.post("/login", userController.login);

module.exports = user_router;
