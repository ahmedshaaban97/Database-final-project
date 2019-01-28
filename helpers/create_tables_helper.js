const mysql = require('mysql');
let sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'final-project'
});


module.exports = {

    createDonorsTable : function () {
        let sql = `CREATE TABLE donor(Fname VARCHAR(250),Lname VARCHAR(250),ssn INT NOT NULL,bloodType VARCHAR(10), weight INT , age INT , numOfDonation INT DEFAULT 0, PRIMARY KEY (ssn) );`
        sqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                console.log('donors table created successfully');
            } else {
                console.log(err);
            }
        });
    },

    createEmployeeTable : function () {
        let sql = `CREATE TABLE employee(userName VARCHAR(250), Fname VARCHAR(250),Lname VARCHAR(250),email VARCHAR(250),status VARCHAR(50), PRIMARY KEY (userName))`;
        sqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                console.log('employee table create successfully')
            } else {
                console.log(err)
            }
        });
    },
    createRecipientTable : function () {
        let sql = `CREATE TABLE recipient(ssn INT, Fname VARCHAR(250),Lname VARCHAR(250), bloodType VARCHAR(10), amountRequired INT NOT NULL, numOfRequests INT NOT NULL, PRIMARY KEY (ssn))`
        sqlConnection.query(sql,(err,rows,fields)=>{
            if (!err){
                console.log('recipient table created successfully')
            } else {
                console.log(err)
            }
        });
    },


};