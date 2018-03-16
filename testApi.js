const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');

async function print () {
  const brands = await getBrands();

  console.log(brands);
}

print();



async function print2 () {
  const models = await getModels('PEUGEOT');

  console.log(models);
}

print2();