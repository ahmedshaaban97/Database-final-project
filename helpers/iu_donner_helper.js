const {createDonorsTable, createEmployeeTable, createRecipientTable} = require('./create_tables_helper');

const mysql = require('mysql');
let sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'final-project'
});

let success = 400;
let fail = 404;
module.exports = {
    insert: async function (req, res, fname, lname, age, ssn, bloodType, weight) {
        let status = 404;
        await sqlConnection.query(`INSERT INTO donor(Fname,Lname,age,ssn,bloodType,weight)VALUES('${fname}','${lname}','${age}','${ssn}','${bloodType}','${weight}')`, (err, rows, fields) => {
            if (!err) {
                console.log('patient inserted');
                status = 400;

            } else {
                console.log(err);
            }

        });
         return status
    },
    update: function (req, res, fname, lname, age, ssn, bloodType, weight) {
        let status = 404;
        let sql = `UPDATE donor SET Fname = '${fname}' , Lname = '${lname}' , age = '${age}', weight = '${weight}', bloodType = '${bloodType}' WHERE ssn = '${ssn}'`
        sqlConnection.query(sql, (err, rows, fileds) => {

            if (!err) {
                console.log('patient updated');
                status = 400;
                res.send('patient updated');
            } else {
                console.log(err);
            }
        });
    },

    select:  function (req, res) {
        let status = "";
        let sql =  'SELECT * FROM donor'
        let connection =  sqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                console.log('table selected');
                return rows;
            } else {
                console.log(err);
                status = fail;
                return fail;
            }
        });


    },

    select_ssn: function (req, res, ssn) {
        let sql = 'SELECT * FROM donor where ssn = ?'
        sqlConnection.query(sql, [ssn], (err, rows, fields) => {

            if (!err)
                res.send(rows);
            console.log(err)
        })
    },

    delete_ssn: function (req, res, ssn) {
        let sql = 'DELETE FROM donor where ssn = ?'
        sqlConnection.query(sql, [ssn], (err, rows, fields) => {
            if (!err)
                res.send('Patient deleted');
            console.log(err)
        })
    },


    testDonner:

       async function () {
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
        },
    incrementNumOfDonations: async function (req,res,ssn) {
        let sql = 'SELECT * FROM donor where ssn = ?'
        sqlConnection.query(sql, [ssn], (err, rows, fields) => {

            if (!err){
                console.log(rows)

            }

            console.log(err)
        })

    }
};