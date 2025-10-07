const express = require("express");
const {signup , login} = require("../controllers/authControllers");
const jwtAuth = require("../middlewares/jwtMiddleware")
const router = express();

router.post("/auth/signup",signup);
router.post("/auth/login",login);

module.exports = router;