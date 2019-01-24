const express = require('express');
const router = express.Router();
const {select, select_ssn, delete_ssn, insert, update} = require('../helpers/iu_donner_helper');

//get all dopn
router.get('/', (req, res) => {
    select(req, res);
});

//get certain donner
router.get('/:ssn', (req, res) => {
    select_ssn(req, res, req.params.ssn)
});

//delete certain donner
router.delete('/delete/:ssn', (req, res) => {
    delete_ssn(req, res, req.params.ssn);
});

//insert donner
router.post('/insert', (req, res) => {
    let status = insert(req, res, req.body.fname, req.body.lname, req.body.age, req.body.condition, req.body.ssn, req.body.adress);
    console.log(status);
});

//update certain donner
router.put('/update', (req, res) => {
    let status = update(req, res, req.body.fname, req.body.lname, req.body.age, req.body.condition, req.body.ssn, req.body.adress);

    console.log(status);
});


module.exports = router;
