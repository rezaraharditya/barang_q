const express = require('express')
const bodyParser = require('body-parser')
const index = require('./routes/index.js')
const customer = require('./routes/customer.js')
const product = require('./routes/product')
const database = require('./config/database.js')
// create express app
const app = express();

//server file statik
app.use(express.static('views/pages'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine','ejs');

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use('/', index);
app.use('/customer', customer);
app.use('/product', product);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
