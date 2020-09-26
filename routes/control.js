var express = require('express');
var router = express.Router();
var request = require('request');

const hostUrl = "http://127.0.0.1";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res,next) {
    const pin = req.body.pin;
    if(['D0','D1','D2','D3','D4','D5','D6','D7','D8','D9','LED'].indexOf(pin) >= 0) {
        request(hostUrl+'/toggle'+pin, function(err, response, body) {
            if(!err && response.statusCode == 200) {
                res.send("Done");
            }
        });
    }
});

module.exports = router;
