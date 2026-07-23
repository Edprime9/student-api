const express = require("express");
const router = require('express').Router();

const studentsController = require('../controllers/students');
const validation = require("../validation/validator");

router.get('/', studentsController.getAll);

router.get('/:id', studentsController.getSingle);

router.post(
  "/",
  validation.studentRules(),
  studentsController.createStudent
);

router.put(
  "/:id",
  validation.studentRules(),
  studentsController.updateStudent
);

router.delete('/:id', studentsController.deleteStudent);

module.exports = router;