import axios from 'axios';
const API_KEY = 'a461778d9de54ce3d7b0f405fa49b3b3';
const URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = URL;

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return await response.data.results;
};
export const fetchSearchedMovies = async newQuery => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${newQuery}&include_adult=true`
  );

  return await response.data.results;
};
export const fetchMovieById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return await response.data;
};
export const fetchCastById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return await response.data;
};
export const fetchReviewsById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return await response.data;
};
