var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Depot Connect' });
});

router.get('/categories', function(req, res) {
  res.send('Specific Categories');
});

module.exports = router;
