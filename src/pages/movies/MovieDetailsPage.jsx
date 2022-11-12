import { MovieDetails } from '../../components/movieDetails/MovieDetails';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../components/Api';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from '../../components/App.styled';
import { GoBackLink } from './../../components/goBackLink/GoBackLink';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  // useEffect(() => {
  //   getMovieById(id);
  // }, [id]);
  useEffect(() => {
    fetchMovieById(movieId)
      .then(results => setMovie(results))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <>
      <GoBackLink to={backLinkHref}>Back to movies</GoBackLink>
      <MovieDetails movie={movie} />
      <Link to="cast"> Read about cast</Link>
      <Link to="reviews"> Check Reviews</Link>
      <Outlet />
    </>
  );
};
