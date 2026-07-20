const express = require("express");
const router = require('express').Router();

const studentsController = require('../controllers/students');

router.get('/', studentsController.getAll);

router.get('/:id', studentsController.getSingle);

router.post('/', studentsController.createStudent);

router.put('/:id', studentsController.updateStudent);

router.delete('/:id', studentsController.deleteStudent);

module.exports = router;