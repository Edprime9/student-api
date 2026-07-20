const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'A school API',
    description: 'A simple API for managing Students and their Courses',
  },
  host: 'localhost:3000',
  schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generates the Swagger documentation
swaggerAutogen(outputFile, endpointsFiles, doc);