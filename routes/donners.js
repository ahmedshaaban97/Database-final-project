const express = require('express');
const router = express.Router();
const {select, select_ssn, delete_ssn, insert, update, incrementNumOfDonations} = require('../helpers/iu_donner_helper');

//get all dopn
router.get('/', (req, res) => {
    let result = select(req, res)
    console.log(`result = ${result}`);

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
router.post('/insert', async (req, res) => {
    const response = await insert(req, res, req.body.fname, req.body.lname, req.body.age, req.body.ssn, req.body.bloodTybe, req.body.weight);
    console.log(`respnose = ${response}`);
    await res.redirect('/login')

});

//update certain donner
router.put('/update', (req, res) => {
    let status = update(req, res, req.body.fname, req.body.lname, req.body.age, req.body.condition, req.body.ssn, req.body.bloodTybe, req.body.weight);

    console.log(status);
});

router.post('/test', (req, res) => {
    incrementNumOfDonations(req, res, 156156);

});


module.exports = router;
