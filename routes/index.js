var express = require('express');
var router = express.Router();
var jsontest = {name: 'Rob', job: 'Baller'}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,test: jsontest});
});

module.exports = router;
