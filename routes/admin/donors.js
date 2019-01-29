const express = require('express');
const router = express.Router();
const {insert} = require('../../helpers/iu_donner_helper');

const mysql = require('mysql');
let sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'final-project'
});


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


// select all donors
router.get('/',async (req,res)=>{
    let result = ''
    let sql = await 'SELECT * FROM donor'
    let connection = await sqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            res.render('admin/donors/index',{donors : rows});
        } else {
            console.log(err);
        }
    });
});

//select certain donor
router.get('/select_ssn',(req,res)=>{
    res.render('admin/donors/select');
});

router.post('/select_ssn',(req,res)=>{
    let sql = 'SELECT * FROM donor where ssn = ?'
    sqlConnection.query(sql, [req.body.ssn], (err, rows, fields) => {

        if (!err)
            res.render('admin/donors/select',{donors : rows});
        else
        console.log(err)
    }) ;
});


router.get('/update',(req,res)=>{
    res.render('admin/donors/update');
});

router.post('/update',(req,res)=>{
    let sql = 'SELECT * FROM donor where ssn = ?'
    sqlConnection.query(sql, [req.body.ssn], (err, rows, fields) => {

        if (!err)
            res.render('admin/donors/update',{donors : rows});
        else
            console.log(err)
    }) ;
});




router.get('/insert',(req,res)=>{
    res.render('admin/donors/create');
});
router.post('/insert', async (req, res) => {
    const response = await insert(req, res, req.body.fname, req.body.lname, req.body.age, req.body.ssn, req.body.bloodTybe, req.body.weight);
    await res.redirect('/admin/donor');
});





module.exports = router;