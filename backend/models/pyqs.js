const moongoose = require('mongoose');

const pyqsSchema = new moongoose.Schema({
    title: {
        type: String, 
        required: [true, "Title is required"]
    },
    fileUrl: {              
        type: String,
        required: [true, "File URL is required"]        
    },
    subject: {
        type: String,
        required: [true, "Enter the subject"]
    },
    department: {
        type: String,   
    },
    semester: {
        type: Number,       
        min: 1,
        max: 8,
        required: [true, "Semester is required"]
    },
    uploadedBy: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    verified: {
        type: Boolean,
        default: false
    },
    year: {
        type: Number,
        required: [true, "Year is required"]
    },
    examType: {
        type: String,   
        required: [true, "Exam type is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
})

module.exports = moongoose.model('PYQs', pyqsSchema);