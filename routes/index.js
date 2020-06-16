var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/math', function (req, res, next) {
  res.render('math', {
    title: 'Math'
  });
});

router.post('/math', function (req, res, next) {
  let a = parseFloat(req.body.a);
  let b = parseFloat(req.body.b);
  let operand = req.body.operand;

  let calc = require('../modules/math.js');

  let result = calc(a, b, operand);

  res.render('result', {
    title: 'Result',
    result: result
  })
});

router.post('/math_service', upload.none(), function (req, res, next) {
  let a = parseFloat(req.body.a);
  let b = parseFloat(req.body.b);
  let operand = req.body.operand;

  let calc = require('../modules/math.js');

  let result = calc(a, b, operand);

  res.json(result);
});

module.exports = router;