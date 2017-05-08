var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Patterns' });
});
router.get('/module', function(req, res) {
  res.render('module', { title: 'Module' });
});
router.get('/singleton', function(req, res) {
  res.render('singleton', { title: 'Singleton' });
});
router.get('/observer', function(req, res) {
  res.render('observer', { title: 'Observer' });
});
router.get('/strategy', function(req, res) {
  res.render('strategy', { title: 'Strategy' });
});
router.get('/decorator', function(req, res) {
  res.render('decorator', { title: 'Decorator' });
});


module.exports = router;
