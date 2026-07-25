const express = require("express");
const router = require('express').Router();

const coursesController = require('../controllers/courses');
const validation = require("../validation/validator");
const { isAuthenticated } = require("../validation/authenticate");

router.get('/', coursesController.getAll);

router.get('/:id', coursesController.getSingle);

router.post(
  "/", isAuthenticated,
  validation.courseRules(),
  coursesController.createCourse
);

router.put(
  "/:id", isAuthenticated,
  validation.courseRules(),
  coursesController.updateCourse
);

router.delete('/:id', isAuthenticated, coursesController.deleteCourse);

module.exports = router;