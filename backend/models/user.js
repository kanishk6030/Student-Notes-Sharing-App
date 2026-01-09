const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"Username is mandatory"]
    },
    email:{
        type: String,
        required: true,
        match: [/.+\@.+\..+/, "Email is not     valid"]
    },
    password:{
        type:String,
        required:function () {
        return this.authProvider === "local";
    },
    },
    googleId: {
        type: String,
    },
    authProvider: {
        type: String,
        enum: ["local", "google"],
        default: "local",
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // only two roles
        default: 'user'
    },
    profileUrl:{
        type:String,
    },
    department:{
        default: "General",
        type:String,
    },
    university:{
        type:String,
        default: "Unknown"  
    },
    semester:{
        default: 1,
        type:Number,
        min:1,
        max:8,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    uploadedNotes:{
        type:Schema.Types.ObjectId,
        ref:"notes"
    }
})

module.exports = mongoose.model("User",userSchema);