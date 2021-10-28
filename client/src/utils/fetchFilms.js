import axios from 'axios';

export const fetchFilms = async (searchType, queryInput, page) => {
  let query = 'https://api.themoviedb.org/3/';
    
  if (searchType === 'byName') {
    query += `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ru&page=${page}&include_adult=false&query=`;
    query += queryInput;
  } else {
    query += `movie/${searchType}?api_key=${process.env.REACT_APP_API_KEY}&language=ru&page=${page}`;
  }
  
  const response = await axios(query);
  return response;
}
