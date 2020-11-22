const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routers/index.routes.js')
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use('/', index)

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
