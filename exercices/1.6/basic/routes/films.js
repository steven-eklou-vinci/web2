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


// Read all the films whith a minimum duration
router.get('/', function (req, res,next) {
  const filter = req?.query?.['minimum-duration']
  ? Number (req.query['minimum-duration'])
  : undefined;
  console.log(filter);
  if(filter!=undefined && typeof filter==='number'){
    const filterFilms = films.filter((film)=>film.duration >= filter)
    console.log("je passe par ici")
    return res.json(filterFilms );
  }
  res.json(films )
});

// Read the films whith the id
router.get('/:id', function (req, res,next) {
  console.log(`GET /films/${req.params.id}`);
  const indexFilms = films.findIndex((film)=>film.id==req.params.id);
  if(indexFilms<0) return res.sendStatus(404);
  res.json(films[indexFilms]);
});

//Create a new film
//Pourquoi on ne mets juste pas != ??
router.post('/',(req,res)=>{
const title = req?.body?.title.length !== 0 ? req.body.title : undefined;
const duration = req?.body?.duration >0 ? req.body.duration : undefined;
const budget = req?.body?.budget;

const link = req?.body?.link.length !== 0 ? req.body.link.length : undefined;

if( !title || !duration || !budget || !link) return res.status(400).send("Bad Request: Missing required fields.");
if (isNaN(duration) || isNaN(budget)) return res.status(400).send('Bad Request: Duration and budget must be numbers.');
const ifAlreadyTitle = films.some(film=> film.title===title);
if(title==="Bleach") return res.status(404).send("There's none films called " + title + " in the world :(");
if(ifAlreadyTitle) return res.status(409).send("There's already a film named " + title + " :(");



//pq films[lastItemIndex]?.id
const lastItemIndex = films?.length !==0 ? films.length-1 : undefined;
const lastId =  lastItemIndex !== undefined ? films[lastItemIndex].id : 0;
const nextId = lastId + 1;

const newFilm = {
  id : nextId,
  title : title,
  duration : duration,
  budget : budget,
  link :link
};
films.push(newFilm);
res.json(newFilm)
});

router.delete('/:id',(req,res) => {
  console.log(`GET /films/${req.params.id}`);
  const indexFilms = films.findIndex(film=>film.id==req.params.id);
  if(indexFilms<0) return res.status(404).send("There's none films :( ")
  const removedFromFilms = films.splice(indexFilms,1);
  const theRemovedElement = removedFromFilms[0];
  res.json(theRemovedElement);
});

router.patch('/:id',(req,res) => {
  console.log(`GET /films/${req.params.id}`);
  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;

  if(!title && !duration && !budget && link) return res.status(400).send("Bad Request: Missing required fields.");

  const indexFilms = films.findIndex(film=>film.id==req.params.id);
  if(indexFilms<0) return res.status(404).send("Film not found");

  const updateFilm = {...films[indexFilms], ...req.body};
  films[indexFilms] = updateFilm;
  res.json(updateFilm);
});

router.put('/:id',(req,res) => {
  console.log(`GET /films/${req.params.id}`);
  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;

  if(!title || !duration || !budget || !link) return res.status(400).send("Bad Request: Missing required fields.");

  const indexFilms = films.findIndex(film=>film.id==req.params.id);
  console.log(indexFilms);
  if(indexFilms===-1){
    console.log("Je suis iciiiii")
    //const lastItemIndex = films?.length !==0 ? films.length-1 : undefined;
    //const lastId =  lastItemIndex !== undefined ? films[lastItemIndex].id : 0;
    const nextId = films.length + 1;
    const newFilm = {
      id : nextId,
      title : title,
      duration : duration,
      budget : budget,
      link :link
    };
    films.push(newFilm);
    return res.json(newFilm);
  }

  const updateFilm = {...films[indexFilms], ...req.body};
  films[indexFilms] = updateFilm;
  res.json(updateFilm);
});

module.exports = router;