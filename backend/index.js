require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const authRoutes = require("../backend/router/authRoute")
const userRoute = require("../backend/router/userRoute")
const noteRoute = require("../backend/router/noteRoute")
// MongoDb connection
const app = express();

app.use(cors({
  origin: '*', // or '*' for all origins, but specific is safer
  credentials: true // only if you use cookies/auth headers
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

app.get("/",(req,res)=>{
  res.send("Hello");
})

// Notes sharing uploading & destroying
app.use("/api",noteRoute);

app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({limit: "20mb",extended:true}))

// LOGIN & SIGNUP ROUTES
app.use("/api/auth",authRoutes);
// User Profile and all
app.use("/api",userRoute);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is listening to the ${PORT}`)
})