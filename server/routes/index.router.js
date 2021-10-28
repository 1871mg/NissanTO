const express = require('express');
const axios = require('axios');
const getMovieObjectToRender = require('../utils/getMovieObjectToRender');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const popularFilmsFromDB = response.data.results;

    // eslint-disable-next-line arrow-body-style
    const filmsResult = popularFilmsFromDB.map((film) => {
      return getMovieObjectToRender(film, res.locals.isAuth);
    });
    res.render('index', { filmsResult, resultTitle: 'Популярные фильмы' });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
