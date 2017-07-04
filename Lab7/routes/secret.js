var mongodb = require('mongodb');
var mongo = require('mongoskin');
var express = require('express');
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

var router = express.Router();

router.get('/', function(req, res, next) {
  var db = mongo.db('mongodb://localhost:27017/lab7db', {native_parser : true});
  console.log('inside secret router')
  db.bind('homework7');

  db.homework7.findOne({}, (err, item) => {
    let decrypted = decipher.update(item.message, 'hex', 'utf8');
    res.send(decrypted);
    db.close()
  })
});

module.exports = router;
// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Secret' });
// });

// module.exports = router;