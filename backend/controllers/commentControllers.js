// controllers/commentController.js
const Comment = require("../models/comments");

exports.addComment = async (req, res) => {
  const { noteId } = req.params;
  const { content } = req.body;

  try {
    const comment = await Comment.create({
      content,
      user: req.user.userId,
      note: noteId,
    });

    res.status(201).json({ success: true, comment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getComments = async (req, res) => {
  const { noteId } = req.params;

  try {
    const comments = await Comment.find({ note: noteId })
      .populate("user", "username")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, comments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.commentCount = async (req, res) => {
  try {
    const count = await Comment.countDocuments({ note: req.params.noteId });
    res.status(200).json({ success: true, count });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Not found" });

    if (comment.user.toString() !== req.user.userId.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await comment.deleteOne();
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
