var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const films = [
{
  id : 2,
  title : "One piece Red",
  duration : 123,
  budget : 5000,
  link : "https://www.allocine.fr/film/fichefilm_gen_cfilm=298674.html"
}
];

module.exports = router;