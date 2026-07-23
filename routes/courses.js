const express = require("express");
const router = require('express').Router();

const coursesController = require('../controllers/courses');
const validation = require("../validation/validator");

router.get('/', coursesController.getAll);

router.get('/:id', coursesController.getSingle);

router.post(
  "/",
  validation.courseRules(),
  coursesController.createCourse
);

router.put(
  "/:id",
  validation.courseRules(),
  coursesController.updateCourse
);

router.delete('/:id', coursesController.deleteCourse);

module.exports = router;