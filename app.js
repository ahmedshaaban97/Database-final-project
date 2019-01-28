const express = require('express');
const app = express();
const port = process.env.PORT || 4444;
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const recipient = require('./routes/recipient');
const donor = require('./routes/donners');
const employee = require('./routes/employee');
const admin_donor = require('./routes/admin/donors');
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
app.use(express.static(path.join(__dirname, 'public')));

//set view engine
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

//data parsing middlewears
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// users APIs
app.use('/', main);
app.use('/api/donor', donor);
app.use('/api/employee', employee);
app.use('/api/recipient', recipient);



// Admin APIs
app.use('/admin/donor',admin_donor)


//running the server
app.listen(port, err => {
    if (err)
        console.log("error conecting");
    console.log('server connected')
});

