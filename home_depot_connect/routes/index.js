var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Depot Connect' });
});

router.post('/signin', function(req, res) {
            res.redirect("login");
});

/* GET login page. */
router.get('/login', function(req, res) {
  res.render('login', { title: 'Home Depot Connect' });
});

router.post('/category', function(req, res) {
            res.redirect("categories");
});

router.get('/categories', function(req, res) {
  res.render('categories', { title: 'Home Depot Connect' });
});

router.post('/createacc', function(req, res) {
            res.redirect("account");
});

/* GET Account page. */
router.get('/account', function(req, res) {
  res.render('account', { title: 'Home Depot Connect' });
});
//
// /* GET pro page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home Depot Connect' });
// });
//
// /* GET options page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home Depot Connect' });
// });
//
// /* GET list page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home Depot Connect' });
// });

module.exports = router;
