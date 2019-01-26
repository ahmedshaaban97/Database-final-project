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
<<<<<<< HEAD
    insert: function (req, res, fname, lname, age, weight, ssn) {
        let status = 404;
        let sql = `INSERT INTO donor(Fname,Lname,age,weight,ssn)VALUES('${fname}','${lname}','${age}','${weight}','${ssn}')`
        sqlConnection.query(sql, (err, rows, fields) => {
=======
    insert: function (req, res, fname, lname, age, condition, ssn, bloodType,weight) {
        let status = 404;
        sqlConnection.query(`INSERT INTO patient(Fname,Lname,age,pcondition,ssn,bloodType,weight)VALUES('${fname}','${lname}','${age}','${condition}','${ssn}','${bloodType}','${weight}')`, (err, rows, fields) => {
>>>>>>> 5b21a917e5eb3c6ea71f6ca5c6a465f3b115cf19
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
<<<<<<< HEAD
        let sql = `UPDATE donor SET Fname = '${fname}' , Lname = '${lname}' , age = '${age}', pcondition = '${condition}', adress = '${adress}' WHERE ssn = '${ssn}'`
        sqlConnection.query(sql, (err, rows, fileds) => {
=======
        sqlConnection.query(`UPDATE donner SET Fname = '${fname}' , Lname = '${lname}' , age = '${age}', pcondition = '${condition}', adress = '${adress}' WHERE ssn = '${ssn}'`, (err, rows, fileds) => {
>>>>>>> 5b21a917e5eb3c6ea71f6ca5c6a465f3b115cf19
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


<<<<<<< HEAD
    select: function (req, rse) {
        let status = 404;
        let sql = 'SELECT * FROM donor'
        sqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                console.log('table selected');
                status = 400;
                console.log(status);
=======
    select: function (req, res) {
        sqlConnection.query('SELECT * FROM donner', (err, rows, fields) => {
            if (!err)
>>>>>>> 5b21a917e5eb3c6ea71f6ca5c6a465f3b115cf19
                res.send(rows);
                return status;
            } else {
                console.log(err);
                return fail;
            }
        });
    },

    select_ssn: function (req, res, ssn) {
<<<<<<< HEAD
        let sql = 'SELECT * FROM donor where ssn = ?'
        sqlConnection.query(sql, [ssn], (err, rows, fields) => {
=======
        sqlConnection.query('SELECT * FROM donner where ssn = ?', [ssn], (err, rows, fields) => {
>>>>>>> 5b21a917e5eb3c6ea71f6ca5c6a465f3b115cf19
            if (!err)
                res.send(rows);
            console.log(err)
        })
    },

    delete_ssn: function (req, res, ssn) {
<<<<<<< HEAD
        let sql = 'DELETE FROM donor where ssn = ?'
        sqlConnection.query(sql, [ssn], (err, rows, fields) => {
=======

        sqlConnection.query('DELETE FROM donner where ssn = ?', [ssn], (err, rows, fields) => {
>>>>>>> 5b21a917e5eb3c6ea71f6ca5c6a465f3b115cf19
            if (!err)
                res.send('Patient deleted');
            console.log(err)
        })
    },

    testDonner: function () {
        let sql = 'SELECT * FROM donor'
        sqlConnection.query(sql, (err, rows, fields) => {
            if (err) {
                createDonorsTable();
                createEmployeeTable();
                createRecipientTable();
            }
            if (!err) {
                console.log('Database already set and ready for use')
            }

        });
    }
};