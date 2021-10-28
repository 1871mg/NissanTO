module.exports = function (movieFromDB, isAuth) {
  let title; let dataAttribute;
  const imgpath = 'https://image.tmdb.org/t/p/w200';

  if (movieFromDB.title.length < 20) {
    title = movieFromDB.title;
    dataAttribute = '';
  } else {
    title = `${movieFromDB.title.slice(0, 17)}...`;
    dataAttribute = movieFromDB.title;
  }

  return {
    title,
    rating: movieFromDB.vote_average,
    date: movieFromDB.release_date,
    img: `${imgpath}${movieFromDB.poster_path}`,
    id: movieFromDB.id,
    originalTitle: movieFromDB.original_title,
    dataAttribute,
    isAuth,
  };
};
