const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
  try {
    const result = await mongodb
      .getDatabase()
      .collection('students')
      .find();

    const students = await result.toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(students);

  } catch (err) {
    res.status(500).json(err);
  }
};

const createStudent = async (req, res) => {
  try {

    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const response = await mongodb
      .getDatabase()
      .collection('students')
      .insertOne(student);

    if (response.acknowledged) {
      res.status(201).json({
        id: response.insertedId
      });
    }

  } catch (err) {
    res.status(500).json(err);
  }
};
  const updateStudent = async (req, res) => {

  try {

    const studentId = new ObjectId(req.params.id);

    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const response = await mongodb
      .getDatabase()
      .collection('students')
      .replaceOne(
        { _id: studentId },
        student
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

const deleteStudent = async (req, res) => {

  try {

    const studentId = new ObjectId(req.params.id);

    const response = await mongodb
      .getDatabase()
      .collection('students')
      .deleteOne({
        _id: studentId
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
  createStudent,
  updateStudent,
  deleteStudent
};