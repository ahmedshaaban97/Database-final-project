const express = require('express');
const router = express.Router();
const {select,select_ssn,insert,update,delete_ssn} =require('../helpers/iu_recipient_helper');

router.all('/*',(req,res,next)=>{
    req.app.locals.layout = 'home';
    next();
});

//get all dopn
router.get('/', (req, res) => {
    select()
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
    let status = insert(req, res, req.body.fname, req.body.lname,req.body.ssn, req.body.bloodTybe,req.body.amount);
    console.log(status);
});

//update certain donner
router.put('/update', (req, res) => {
    let status = update(req, res, req.body.fname, req.body.lname,req.body.ssn, req.body.bloodTybe,req.body.amount);

    console.log(status);
});



module.exports = router;