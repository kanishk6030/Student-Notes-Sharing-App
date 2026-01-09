require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("./controllers/authControllers")
const authRoutes = require("../backend/router/authRoute")
const userRoute = require("../backend/router/userRoute")
const noteRoute = require("../backend/router/noteRoute")
// MongoDb connection
const app = express();

// CORS configuration to allow credentials and cookies
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Allow frontend origins (without trailing slash)
  credentials: true, // Allow cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const localUrl = "mongodb://127.0.0.1:27017/notes-sharing"
main()
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(process.env.ATLAS_URL);
}

app.use(
  session({
    secret: "passport_secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({limit: "20mb",extended:true}))
app.use(passport.initialize());
app.use(passport.session());

// Notes sharing uploading & destroying
app.use("/api",noteRoute);

// Google Routes
app.use("/auth",authRoutes);
// User Profile and all
app.use("/api",userRoute);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is listening to the ${PORT}`)
})