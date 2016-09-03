var express = require('express');
var router = express.Router();

/* GET vedio page. */
router.get('/', function(req, res, next) {
  res.render('vedio', { title: 'Express' });
});

module.exports = router;