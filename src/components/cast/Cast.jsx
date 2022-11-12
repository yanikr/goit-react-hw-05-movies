import { useState, useEffect } from 'react';
import { fetchCastById } from '../Api';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');
  useEffect(() => {
    fetchCastById(movieId)
      .then(results => setCast(results))
      .catch(error => console.log(error.message));
  }, [movieId]);
  return (
    <>
      {cast && (
        <CastList>
          {cast.cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path === null ? (
                <img
                  src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
                  alt={actor.name}
                  width="200px"
                  height="250px"
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width="200px"
                  height="250px"
                />
              )}

              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </li>
          ))}
        </CastList>
      )}
    </>
  );
};
