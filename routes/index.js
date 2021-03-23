var express = require('express');
var router = express.Router();
const jsontest = {name: 'Rob', job: 'Baller'}
const jsontestc = jsontest
const rp = require('request-promise');
    const requestOptions = {
     method: 'GET',
      uri: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
      'start': '1',
      'limit': '2',
      'convert': 'BTC'
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
      },
      json: true,
      gzip: true
    };

    const jsonresponse = rp(requestOptions).then(response => {
      console.log('', response);
      console.log('', jsonresponse);
      let jsontestc = response;
      return jsontestc;
    }).catch((err) => {
      console.log('API call error:', err.message);
    });
/*console.log('',jsonresponse)*/
/* GET home page. */
router.get('/', function(req, res, next) {
  
  /*console.log('',jsonresponse)*/
  res.render('index', { title: 'Express' ,test: jsontest, theresponse: jsontestc});
});

module.exports = router;
