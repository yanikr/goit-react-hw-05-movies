import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Movies } from '../pages/movies/Movies';
// import { MovieDetails } from './MovieDetails';
import { NotFound } from './notFound/NotFound';
// import { Link } from './App.styled';
import { MovieDetailsPage } from '../pages/movies/MovieDetailsPage';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';
import { SharedLayout } from './sharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
