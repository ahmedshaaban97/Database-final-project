const {createDonorsTable, createEmployeeTable, createRecipientTable} = require('./create_tables_helper')
const mysql = require('mysql');
let sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'final-project'
});

let success = 400;
let fail = 404;
module.exports = {
    insert: function (req, res, fname, lname,ssn, bloodType, amountRequired) {
        let status = 404;
        let sql = `INSERT INTO recipient(Fname,Lname,ssn,bloodType,amountRequired)VALUES('${fname}','${lname}','${ssn}','${bloodType}','${amountRequired}')`
        sqlConnection.query(sql, (err, rows, fields) => {
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
    update: function (req, res, fname, lname,ssn, bloodType, amountRequired) {
        let status = 404;
        let sql = `UPDATE recipient SET Fname = '${fname}' , Lname = '${lname}' , bloodType = '${bloodType}', amountRequired = '${amountRequired}' WHERE ssn = '${ssn}'`
        sqlConnection.query(sql, (err, rows, fileds) => {
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


    select: function (req, rse) {
        let status = 404;
        let sql = 'SELECT * FROM recipient'
        sqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                console.log('table selected');
                status = 400;
                console.log(status);
                res.send(rows);
                return status;
            } else {
                console.log(err);
                return fail;
            }
        });
    },

    select_ssn: function (req, res, ssn) {
        let sql = 'SELECT * FROM recipient where ssn = ?'
        sqlConnection.query(sql, [ssn], (err, rows, fields) => {
            if (!err)
                res.send(rows);
            console.log(err)
        })
    },

    delete_ssn: function (req, res, ssn) {
        let sql = 'DELETE FROM recipient where ssn = ?'
        sqlConnection.query(sql, [ssn], (err, rows, fields) => {
            if (!err)
                res.send('Patient deleted');
            console.log(err)
        })
    },


};