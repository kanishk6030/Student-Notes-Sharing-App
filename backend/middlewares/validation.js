const { validationResult } = require("express-validator");

// Middleware to check validation result
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return the first error message
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validate;
