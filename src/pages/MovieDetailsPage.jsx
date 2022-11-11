import { MovieDetails } from './../components/MovieDetails';
import { useParams } from 'react-router-dom';
import { getMovieById } from './../components/Api';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from './../components/App.styled';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  // useEffect(() => {
  //   getMovieById(id);
  // }, [id]);
  useEffect(() => {
    getMovieById(movieId)
      .then(results => setMovie(results))
      .catch(error => console.log(error.message));
  }, [movieId]);
  console.log(movie);
  return (
    <>
      <MovieDetails movie={movie} />
      <Link to="cast"> Read about cast</Link>
      <Link to="reviews"> Check Reviews</Link>
      <Outlet />
    </>
  );
};
