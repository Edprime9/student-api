const { body } = require("express-validator");

const studentRules = () => {
  return [
    body("firstName").trim().notEmpty().withMessage("First name is required"),
    body("lastName").trim().notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("course").trim().notEmpty().withMessage("Course is required"),
    body("level").trim().notEmpty().withMessage("Level is required")
  ];
};

const courseRules = () => {
  return [
    body("courseCode").trim().notEmpty().withMessage("Course code is required"),
    body("courseName").trim().notEmpty().withMessage("Course name is required"),
    body("instructor").trim().notEmpty().withMessage("Instructor is required"),
    body("credit").isNumeric().withMessage("Credit must be a number"),
    body("semester").trim().notEmpty().withMessage("Semester is required")
  ];
};

module.exports = {
  studentRules,
  courseRules
};