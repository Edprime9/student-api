const express = require("express");
const router = require('express').Router();

const coursesController = require('../controllers/courses');

router.get('/', coursesController.getAll);

router.get('/:id', coursesController.getSingle);

router.post('/', coursesController.createCourse);

router.put('/:id', coursesController.updateCourse);

router.delete('/:id', coursesController.deleteCourse);

module.exports = router;