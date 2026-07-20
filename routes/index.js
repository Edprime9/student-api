const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  res.send('Welcome to the Student and Course API');
});

router.use('/students', require('./students'));

router.use('/courses', require('./courses'));

module.exports = router;