// validations/user.js
const { body } = require("express-validator");

module.exports.userValidation = [
  body("username").isLength({ min: 3 }).withMessage("Please give Username"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isLength({ min: 0, max: 120 }).withMessage("Enter a strong password"),
  body("department").isLength({ min: 0, max: 120 }).withMessage("Enter your department"),
  body("university").isLength({ min: 0, max: 120 }).withMessage("Enter your university"),
  body("semester").isInt({ min: 1, max: 8 }).withMessage("Enter your semester"),
];

module.exports.notesValidation = [
    body("title").isLength({ min: 3 }).withMessage("Please provide a title"),
    // body("fileUrl").isURL().withMessage("Provide a URL"),
    body("description").isLength({ min: 0, max: 250 }).withMessage("Enter Description"),
    body("subject").isLength({ min: 0, max: 120 }).withMessage("Enter your subject"),
    body("department").isLength({ min: 0, max: 120 }).withMessage("Enter your department"),
    body("university").isLength({ min: 0, max: 120 }).withMessage("Enter your university"),
    body("semester").isInt({ min: 1, max: 8 }).withMessage("Enter your semester"),
]