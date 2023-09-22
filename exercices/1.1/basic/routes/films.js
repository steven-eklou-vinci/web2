var express = require('express');
var router = express.Router();


const FILM = [
{
  id : 2,
  title : "One piece Red",
  duration : 123,
  budget : 5000,
  link : "https://www.allocine.fr/film/fichefilm_gen_cfilm=298674.html"
},

{
    id : 3,
    title : "jsp",
    duration : 123,
    budget : 5000,
    link : "https://www.allocine.fr/film/fichefilm_gen_cfilm=298674.html"
  }
];

// Read all the films from the FILM
router.get('/', (req, res, next) => {
  console.log('GET /films');
  res.json(FILM);
});

module.exports = router;