const express = require('express');
const router = express.Router();
const {testDonner} = require('../helpers/iu_donner_helper');
const {insertRoot} = require('../helpers/iu_employee_helper');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});


router.get('/', async (req, res) => {
    await testDonner();
    await res.render('home/index');
});


router.get('/donor', (req, res) => {
    res.render('home/donor')
});

router.get('/recipient', (req, res) => {
    res.render('home/recipient')
});

router.get('/login', (req, res) => {
    res.render('home/login')
});
router.get('/aboutUS', (req, res) => {
    res.render('home/about_us')
});

module.exports = router;