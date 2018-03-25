const express = require('express')
const router = express.Router();

router.use('/populate', require('./populate'));
router.use('/suv', require('./suv'));

router.get('/', (req,res) => {
  //  res.send('<p> Try "localhost:9292/populate" if you want to import to ES </br>and "localhost:9292/suv" if you want to get data from ES </p>');
  res.render('../../views/index.html');
});


module.exports = router;