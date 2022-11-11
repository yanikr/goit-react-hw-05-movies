import { fetchTrendingMovies } from '../../components/Api';
import { useState, useEffect } from 'react';
// import { MovieLink } from './Home.styled';
import { MoviesList } from './../../components/MoviesList';

export const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);

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
    <main>
      <MoviesList movies={moviesArray} />
      <div>Home Page</div>
    </main>
  );
};
