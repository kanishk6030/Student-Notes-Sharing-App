const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// prevent duplicate likes (user can't like same note twice)
likeSchema.index({ user: 1, note: 1 }, { unique: true });

module.exports = mongoose.model("Like", likeSchema);
