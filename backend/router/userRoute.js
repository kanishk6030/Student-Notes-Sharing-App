const express = require("express");
const jwtAuth = require("../middlewares/jwtMiddleware")
const {viewOwnProfile,showUserProfile,allUsers,updateUser,getUser} = require("../controllers/userController")

const router = express();

router.get("/me",jwtAuth,getUser);
router.get("/users",allUsers);
router.get("/users/profile",jwtAuth,viewOwnProfile);
router.get("/users/:userId",jwtAuth,showUserProfile);
router.put("/users",jwtAuth,updateUser)
// TODO : Create a route for admin only which is able to delete the user

module.exports = router;