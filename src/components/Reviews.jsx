import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from './Api';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  useEffect(() => {
    getReviewsById(movieId)
      .then(results => setReviews(results))
      .catch(error => console.log(error.message));
  }, [movieId]);
  console.log(reviews);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.created_at}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
