const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Student API');
});

router.use('/students', require('./students'));

module.exports = router;