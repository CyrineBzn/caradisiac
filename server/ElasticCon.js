var elasticsearch = require('elasticsearch');
var fs = require("fs");


var client = new elasticsearch.Client({
    host: 'localhost:9200'
});

client.ping({
    requestTimeout: 36000,
  }, function (error) {
    if (error) {
      console.log(error)
    } else {
      console.log('Good news : There is no problems ! ');
    }
});

function Insertion(){
    var json = JSON.parse(fs.readFileSync("./cars.json","utf8"));
    var bodyBrand = {
        body:[
        ]
    };
    for(var i = 0; i < json.length; i++){    
        bodyBrand.body.push({ index:  { _index: 'caradisiac', _type: 'car', _id: i } });
        bodyBrand.body.push({  doc : json[i]} );
    }
    client.bulk(bodyBrand);
}
module.exports = { Insertion:Insertion}


