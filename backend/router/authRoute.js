const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
// const {signup , login} = require("../controllers/authControllers");
// const jwtAuth = require("../middlewares/jwtMiddleware")
const router = express();

// STEP 1: User clicks Google login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// STEP 2: Google redirects here
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // req.user is available here
    const token = jwt.sign(
      {
        userId: req.user._id.toString(),
        role: req.user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    // ✅ STORE TOKEN IN COOKIE
    res.cookie("token", token, {
      httpOnly: true,     // JS can't access
      secure: process.env.NODE_ENV === 'production', // true in production (HTTPS)
      sameSite: "lax",    // prevents CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // Redirect to frontend home page (token is in httpOnly cookie)
    res.redirect(
      `${process.env.FRONTEND_URL || 'http://localhost:5173'}/`
    );
  }
);

// Logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "lax"
  });
  return res.json({ message: "Logged out successfully" });
});

// router.post("/auth/signup",signup);
// router.post("/auth/login",login);

module.exports = router;