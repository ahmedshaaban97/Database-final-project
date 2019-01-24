const express = require('express');
const app = express();
const {insert,update} = require('./helpers/iu_donner_helper');
const bodyParser = require('body-parser');
const doneer = require('./routes/donners');
const mysql = require('mysql');
let sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'final-project'
});

sqlConnection.connect((err) => {
    if (!err) {
        console.log('database connected');
    } else {
        console.log(err)
    }
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/donner', doneer);

app.listen(444, err => {
    if (err)
        return console.log(err);
    console.log('server connected');
});

