import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedMovies } from '../../components/Api';
import { MoviesList } from '../../components/moviesList/MoviesList';
import {
  SearchMovieForm,
  SearchMovieButton,
  SearchMovieInput,
} from './Movies.styled';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.searchQuery.value.toLowerCase();
    setSearchParams({ searchQuery: newQuery });
    setSearchQuery('');
  };

  useEffect(() => {
    if (searchParams.get('searchQuery') !== null) {
      const newQuery = searchParams.get('searchQuery');

      fetchSearchedMovies(newQuery)
        .then(results => {
          results.length !== 0 ? setMovies([...results]) : console.log('error');
        })
        .catch(error => console.log(error.message));
      setSearchQuery(searchParams.get('searchQuery'));
    }
  }, [searchParams]);

  return (
    <>
      <SearchMovieForm onSubmit={handleSubmit}>
        <SearchMovieButton type="submit">
          <span>Search</span>
        </SearchMovieButton>
        <SearchMovieInput
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          value={searchQuery}
          placeholder="Search movies"
        />
      </SearchMovieForm>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
