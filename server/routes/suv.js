const express = require('express');
const router = express.Router();
var elasticsearch = require('elasticsearch');


router.get('/', (req, res) => {
    var client = new elasticsearch.Client({
        hosts: ['http://localhost:9200']
    });

    client.search(
        {
            'index': 'caradisiac',
            'body': {
                'size': 10,
                'query': {
                    'match_all': {}
                },
                'sort': [
                    {
                        'doc.volume.keyword': {
                            'order': 'desc'
                        }
                    }]
              }
          })
        .then((resp) => {
            res.send(resp.hits.hits)
        })
        .catch((err) => {
            res.send(err)
        });


});

module.exports = router;