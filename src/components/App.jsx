import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Movies } from '../pages/Movies';
// import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import { Link } from './App.styled';
import { MovieDetailsPage } from './../pages/MovieDetailsPage';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
