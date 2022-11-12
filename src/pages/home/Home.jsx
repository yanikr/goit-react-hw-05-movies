import { fetchTrendingMovies } from '../../components/Api';
import { useState, useEffect } from 'react';

import { MoviesList } from '../../components/moviesList/MoviesList';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function fetchMovies() {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMoviesArray(trendingMovies);
        // console.log(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);
  return (
    <>
      <main>
        <MoviesList movies={moviesArray} state={location} />
      </main>
    </>
  );
};
