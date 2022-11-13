import { Routes, Route } from 'react-router-dom';
import { NotFound } from './notFound/NotFound';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';
import { SharedLayout } from './sharedLayout/SharedLayout';
import { lazy, Suspense } from 'react';
import { Loader } from './loader/Loader';
const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetailsPage = lazy(() => import('../pages/movies/MovieDetailsPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />

            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
