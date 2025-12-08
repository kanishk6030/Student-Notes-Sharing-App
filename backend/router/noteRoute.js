const express = require("express");
const jwtAuth = require("../middlewares/jwtMiddleware")
const {uploadNote,
getAllNotes,
getOneNote,
getNotesByUser,getNoteBySemsterSubjectDepartment} = require("../controllers/noteController")
const upload = require("../middlewares/cloudConfig");
const validate = require("../middlewares/validation");
const { notesValidation } = require("../middlewares/registerValidation");
const { toggleLike,getLikeStatus } = require("../controllers/likeControllers")
const {
  addComment,
  getComments,
  deleteComment,
  commentCount,
} = require("../controllers/commentControllers");

const router = express();

router.get("/notes",getAllNotes);
router.get("/notes/search/note",getOneNote);
router.get("/notes/search/user",getNotesByUser);
router.post("/notes/upload",jwtAuth,upload.single("fileUrl"),notesValidation,validate,uploadNote)
router.get("/notes/:semester/:department", jwtAuth,getNoteBySemsterAndSubject);

router.post("/notes/:noteId/like", jwtAuth, toggleLike);
router.get("/notes/:noteId/like-status",getLikeStatus);

router.post("/notes/:noteId/comments", jwtAuth, addComment);           
router.get("/notes/:noteId/comments", getComments);                    
router.get("/notes/:noteId/comments/count", commentCount);                
router.delete("/notes/comments/:commentId", jwtAuth, deleteComment); 

// TODO : Create a route for admin only which is able to delete the user

module.exports = router;