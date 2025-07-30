// controllers/likeController.js
const Like = require("../models/likes");
const Note = require("../models/notes");

module.exports.toggleLike = async (req, res) => {
  const { noteId } = req.params;
  const userId = req.user.userId; // assuming JWT auth middleware sets this

  try {
    const existing = await Like.findOne({ user: userId, note: noteId });

    if (existing) {
      await existing.deleteOne();
      return res.status(200).json({ liked: false });
    } else {
      await Like.create({ user: userId, note: noteId });
      return res.status(200).json({ liked: true });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports.getLikeStatus = async (req, res) => {
  const { noteId } = req.params;
//   const userId = req.user.userId;

  try {
    // const liked = await Like.exists({ user: userId, note: noteId });
    const count = await Like.countDocuments({ note: noteId });

    res.status(200).json({  count });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};