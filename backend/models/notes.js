const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    fileUrl:{
        type:String,
        required:true,
    },
    coverUrl:{
        type:String,
    },
    description:{
        type:String,
    },
    subject: {
        type: String,
        required: [true,"Enter the subject"]
    },
    department:{
        type:String,
    },
    university:{
        type:String,
    },
    semester:{
        type:Number,
        min:1,
        max:8,
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true,"UserId is mandatory"]
    },
    verified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Note",noteSchema);