const express = require('express');
const router = require('express').Router();

const studentsController = require('../controllers/students');
const validation = require('../validation/validator');
const { isAuthenticated } = require('../validation/authenticate');

router.get('/', studentsController.getAll);

router.get('/:id', studentsController.getSingle);

router.post(
  '/', isAuthenticated,
  validation.studentRules(),
  studentsController.createStudent
);

router.put(
  '/:id', isAuthenticated,
  validation.studentRules(),
  studentsController.updateStudent
);

router.delete('/:id', isAuthenticated, studentsController.deleteStudent);

module.exports = router;