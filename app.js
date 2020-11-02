const express = require('express');
require('./config/database')
let app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json())


app.use('/api/persons', require('./routers/personsRouter'))


app.listen(8000);
module.exports = app;