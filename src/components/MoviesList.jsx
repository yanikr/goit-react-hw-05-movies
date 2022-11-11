import { MovieLink } from './../pages/home/Home.styled';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, poster_path, title, release_date }) => (
        <div key={id}>
          <MovieLink to={`/movies/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
            <p>{title}</p>
            <p>{release_date}</p>
          </MovieLink>
        </div>
      ))}
    </ul>
  );
};
