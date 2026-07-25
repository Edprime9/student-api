const passport = require('passport');

const router = require('express').Router();

router.use('/', require('./swagger'));

// router.get('/', (req, res) => {
//   res.send('Welcome to the Student and Course API');
// });

router.use('/students', require('./students'));

router.use('/courses', require('./courses'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');  
    });
});

module.exports = router;