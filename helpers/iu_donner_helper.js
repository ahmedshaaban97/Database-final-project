const express = require('express');
const app = express();
const mysql = require('mysql');
let sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'final-project'
});

module.exports = {
    insert: function (req, res, fname, lname, age, condition, ssn, bloodType,weight) {
        let status = 404;
        sqlConnection.query(`INSERT INTO patient(Fname,Lname,age,pcondition,ssn,bloodType,weight)VALUES('${fname}','${lname}','${age}','${condition}','${ssn}','${bloodType}','${weight}')`, (err, rows, fields) => {
            if (!err) {
                console.log('patient inserted');
                status = 400;
                console.log(status);
                res.send('patient inserted');
                return status;
            } else {
                console.log(err);
                return status;
            }


        });
    },
    update: function (req, res, fname, lname, age, condition, ssn, adress) {
        let status = 404;
        sqlConnection.query(`UPDATE donner SET Fname = '${fname}' , Lname = '${lname}' , age = '${age}', pcondition = '${condition}', adress = '${adress}' WHERE ssn = '${ssn}'`, (err, rows, fileds) => {
            if (!err) {
                console.log('patient updated');
                status = 400;
                console.log(status);
                res.send('patient updated');
                return status;
            } else {
                console.log(err);
                return status;
            }
        });
    },


    select: function (req, res) {
        sqlConnection.query('SELECT * FROM donner', (err, rows, fields) => {
            if (!err)
                res.send(rows);
            console.log(err)
        });
    },

    select_ssn: function (req, res, ssn) {
        sqlConnection.query('SELECT * FROM donner where ssn = ?', [ssn], (err, rows, fields) => {
            if (!err)
                res.send(rows);
            console.log(err)
        })
    },

    delete_ssn: function (req, res, ssn) {

        sqlConnection.query('DELETE FROM donner where ssn = ?', [ssn], (err, rows, fields) => {
            if (!err)
                res.send('Patient deleted');
            console.log(err)
        })
    }

};