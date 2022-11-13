import { MovieDetails } from '../../components/movieDetails/MovieDetails';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../components/Api';
import { Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { Link } from '../../components/App.styled';
import { GoBackLink } from './../../components/goBackLink/GoBackLink';
import { Loader } from './../../components/loader/Loader';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation().state?.from ?? '/movies';

  useEffect(() => {
    fetchMovieById(movieId)
      .then(results => setMovie(results))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <>
      <GoBackLink to={location}>Back to movies</GoBackLink>
      <MovieDetails movie={movie} />
      <Suspense fallback={<Loader />}>
        <Link to="cast" state={{ from: location }}>
          Read about cast
        </Link>
        <Link to="reviews" state={{ from: location }}>
          Check Reviews
        </Link>

        <Outlet />
      </Suspense>
    </>
  );
}
