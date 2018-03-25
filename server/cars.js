const { getBrands } = require('node-car-api');
const { getModels } = require('node-car-api');
var fs = require('fs');



async function Get_brands() {
  const brands = await getBrands();
  const cars = [];
  for(brand of brands){
    var carsWithBrand = await getModels(brand);
    for(car of carsWithBrand) {
      cars.push(car);
    };
    fs.writeFileSync('cars.json', JSON.stringify(cars, null, 2),'UTF-8', function (err) {
      if (err) {
          return console.log(err);
      }
  });
      
  }
}
//Get_brands();
exports.Get_brands=Get_brands;
