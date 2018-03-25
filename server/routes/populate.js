const express = require('express');
const ElasticCon = require('../ElasticCon')
const cars = require('../cars.js')
const router = express.Router();



router.get('/', (req, res) => {
   
   cars.Get_brands().then(ElasticCon.Insertion());
   res.send('<p> Indexing data to Elasticsearch </p>');
});

module.exports = router;


