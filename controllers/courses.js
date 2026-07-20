const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
  try {
    const result = await mongodb
      .getDatabase()
      .collection('courses')
      .find();

    const courses = await result.toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(courses);

  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingle = async (req, res) => {
  try {
    const courseId = new ObjectId(req.params.id);

    const result = await mongodb
      .getDatabase()
      .collection('courses')
      .findOne({ _id: courseId });

    if (!result) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);

  } catch (err) {
    res.status(500).json(err);
  }
};

const createCourse = async (req, res) => {
  try {

    const course = {
      courseCode: req.body.courseCode,
      courseName: req.body.courseName,
      instructor: req.body.instructor,
      credit: req.body.credit,
      semester: req.body.semester
    };

    const response = await mongodb
      .getDatabase()
      .collection('courses')
      .insertOne(course);

    if (response.acknowledged) {
      res.status(201).json({
        id: response.insertedId
      });
    }

  } catch (err) {
    res.status(500).json(err);
  }
};
  const updateCourse = async (req, res) => {

  try {

    const courseId = new ObjectId(req.params.id);

    const course = {
      courseCode: req.body.courseCode,
      courseName: req.body.courseName,
      instructor: req.body.instructor,
      credit: req.body.credit,
      semester: req.body.semester
    };

    const response = await mongodb
      .getDatabase()
      .collection('courses')
      .replaceOne(
        { _id: courseId },
        course
      );

    if (response.modifiedCount > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }

  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCourse = async (req, res) => {

  try {

    const courseId = new ObjectId(req.params.id);

    const response = await mongodb
      .getDatabase()
      .collection('courses')
      .deleteOne({
        _id: courseId
      });

    if (response.deletedCount > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }

  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAll,
  getSingle,
  createCourse,
  updateCourse,
  deleteCourse
};