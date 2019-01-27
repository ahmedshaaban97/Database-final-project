const express = require('express');
const app = express();
const port = process.env.PORT || 444
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const donor = require('./routes/donners');
const main = require('./routes/main');
const mysql = require('mysql');

//setting database connection
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


// this allow us to read all the style files stored in the public directory
app.use(express.static(path.join(__dirname,'public')));

//set view engine
app.engine('handlebars',exphbs({defaultLayout: 'home' }));
app.set('view engine','handlebars');

//data parsing middlewears
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/',main);
app.use('/donner', donor);



//running the server
app.listen(port, err => {
    if (err)
        console.log(err);
    console.log('server connected')
});

