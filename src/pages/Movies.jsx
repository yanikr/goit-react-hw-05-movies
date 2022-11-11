import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedMovies } from './../components/Api';
import { MoviesList } from './../components/MoviesList';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // submitted(searchQuery);
    const newQuery = e.target.elements.query.value.toLowerCase();
    setSearchParams({ query: newQuery });
    reset();
  };
  const reset = () => {
    setSearchQuery('');
  };
  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');

      fetchSearchedMovies(newQuery)
        .then(results => {
          results.length !== 0 ? setMovies([...results]) : console.log('error');
        })
        .catch(error => console.log(error.message));
      setSearchQuery(searchParams.get('query'));
    }
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          value={searchQuery}
          placeholder="Search movies"
        />
      </form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
