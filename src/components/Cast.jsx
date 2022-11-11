import { useState, useEffect } from 'react';
import { getCastById } from './Api';
import { useParams } from 'react-router-dom';
export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');
  useEffect(() => {
    getCastById(movieId)
      .then(results => setCast(results))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width="200px"
                height="250px"
              />
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
