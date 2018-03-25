const elasticsearch = require('elasticsearch');
const express = require('express');
const bodyParser = require('body-parser');
var engines = require('consolidate');


const app = express();


app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(9292, () => {
    console.log('Server running on localhost:9292');
})
app.timeout = 36000;
