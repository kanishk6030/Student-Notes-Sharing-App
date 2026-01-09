// const User = require("../models/user");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// exports.signup = async (req, res) => {
//   const { username, email, password } = req.body;

//   const userExists = await User.findOne({ email });

//   if (userExists) return res.status(400).json({ error: "User Exists Already" });

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = await User.create({
//     username,
//     email,
//     password: hashedPassword,
//   });
//   return res.status(201).json({
//     message: "User Created Successfully",
//     user: newUser,
//   });
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) return res.status(400).json({ error: "No User Found!" });

//   const isMatchPass = await bcrypt.compare(password, user.password);

//   if (!isMatchPass)
//     return res.status(400).json({ error: "Enter the correct Password" });

//   const token = jwt.sign({ userId: user._id.toString() }, process.env.SECRET, {
//     expiresIn: "24h",
//   });

//   return res.json({
//     message: "Login Successful",
//     token,
//     user: {
//       id: user._id,
//       username: user.username,
//       email: user.email,
//     },
//   });
// };

// exports.changePassword = async (req, res) => {
//   const userId = req.user.userId;
//   const { oldPassword, newPassword } = req.body;

//   const user = await User.findById(userId);

//   if (!user) return res.status(404).json({ error: "User Not Found!" });

//   const isMatchPass = await bcrypt.compare(oldPassword, user.password);

//   if (!isMatchPass)
//     return res.status(400).json({ error: "Enter the correct Old Password" });

//   const hashedNewPassword = await bcrypt.hash(newPassword, 10);
//   user.password = hashedNewPassword;
//   await user.save();

//   return res.json({
//     message: "Password Changed Successfully",
//   });
// };

// exports.forgetPassword = async (req, res) => {
//   const { email, newPassword, confirmPassword } = req.body;

//   const user = await User.findOne({ email });

//   if (!user)
//     return res
//       .status(400)
//       .json({ error: "User not found. Invalid Credentials." });

//   if (newPassword === confirmPassword) {

//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     // await User.updateOne(
//     //   { _id: user_id },
//     //   { $set: { password: hashedPassword } }
//     // );

//     user.password = hashedPassword;
//     await user.save();

//     return res
//     .status(200)
//     .json({ message: "Password Updated Successfully" });
//   }
// };


const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        // 1. Check if user exists
        let user = await User.findOne({ email });

        // 2. If not exists → register
        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email,
            googleId: profile.id,
            authProvider: "google",
            profileUrl: profile.photos[0].value,
            role: "student",
          });
        }

        // 3. Login (both cases)
        return done(null, user);

      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// Needed by passport (even if session:false)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
