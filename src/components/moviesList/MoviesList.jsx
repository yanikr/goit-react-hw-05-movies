import { MovieLink } from '../../pages/home/Home.styled';
import { MoviesListGrid, MovieTitle } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesListGrid>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              width="500px"
              height="710px"
            />
            <MovieTitle>{title}</MovieTitle>
          </MovieLink>
        </li>
      ))}
    </MoviesListGrid>
  );
};
