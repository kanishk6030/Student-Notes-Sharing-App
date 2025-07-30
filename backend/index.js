require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("../backend/router/authRoute")
const userRoute = require("../backend/router/userRoute")
const noteRoute = require("../backend/router/noteRoute")
// MongoDb connection
main()
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/notes-sharing");
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("Hello");
})

// LOGIN & SIGNUP ROUTES
app.use("/api/auth",authRoutes);
// User Profile and all
app.use("/api",userRoute);
// Notes sharing uploading & destroying
app.use("/api",noteRoute);


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is listening to the ${PORT}`)
})