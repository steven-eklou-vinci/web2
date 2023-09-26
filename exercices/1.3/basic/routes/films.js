var express = require('express');
var router = express.Router();

const films = [
  {
    id: 1,
    title: 'Star Wars: The Phantom Menace (Episode I)',
    duration: 136,
    budget: '115',
    link: 'https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace',
  },
  {
    id: 2,
    title: 'Star Wars: Episode II – Attack of the Clones',
    duration: 70,
    budget: 115,
    link: 'https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones',
  },
  {
    id: 3,
    title: "Zack Snyder's Justice League",
    duration: 242,
    budget: 70,
    link: 'https://en.wikipedia.org/wiki/Zack_Snyder%27s_Justice_League',
  },
];


// Read all the films whit the de gives sorted method
router.get('/', function (req, res,next) {
  const orderByTheRessource = req?.query?.order?.includes('duration')
  ? req.query.order
  : undefined;
  console.log(`order by ${orderByTheRessource ?? 'not requested'}`);
  if (orderByTheRessource){
    orderedFilms = [...films].sort((a, b)=> a.duration -b.duration);
  }
    console.log('GET /films')
    res.json(orderedFilms ?? films);
});

// Read the films whith the id
router.get('/:id', function (req, res,next) {
  console.log(`GET /films/${req.params.id}`);
  const indexFilms = films.findIndex((film)=>film.id==req.params.id);
  if(indexFilms<0) return res.sendStatus(404);
  res.json(films[indexFilms]);
});
module.exports = router;