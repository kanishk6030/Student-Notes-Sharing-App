const express = require("express");
const {signup , login} = require("../controllers/authControllers");
const jwtAuth = require("../middlewares/jwtMiddleware")
const router = express();

router.post("/signup",signup);
router.post("/login",login);

module.exports = router;