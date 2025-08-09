const User = require("../models/user");
const Note = require("../models/notes");


module.exports.uploadNote = async(req, res) => {
try {
    const note = await Note.create({ 
      fileUrl:req.file?.path || req.file?.secure_url,
      uploadedBy:req.user.userId,
      ...req.body });
      console.log(req.file)
    return res.status(201).json({ success: true, note:note });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports.getAllNotes = async(req,res)=>{
    try {
        const allNotes = await Note.find();
        return res.status(201).json({ success: true, allNotes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports.getOneNote = async(req,res)=>{
    try {
        const {noteId} = req.query;
        console.log(noteId)
        if(!noteId) return res.status(500).json({ success: false, message: "noteId is inavalid" });
        const note = await Note.findById(noteId);
        return res.status(201).json({ success: true, note})
    } catch (error) {
        res.status(500).json({ success: false, message: err.message });
    }
}

module.exports.getNotesByUser = async(req,res)=>{
    try {
    const { userId } = req.query;

    const notes = await Note.find({ uploadedBy: userId });

    return res.status(200).json({ success: true, notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
