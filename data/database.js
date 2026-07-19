const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

let database;

const initDb = (callback) => {
  if (database) {
    console.log('Database is already initialized!');
    return callback(null, database);
  }
  console.log(process.env.MONGODB_URI);
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      database = client.db("studentdb"); // or client.db('studentdb') if you want to specify the database name
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized!');
  }

  return database;
};

module.exports = {
  initDb,
  getDatabase
};