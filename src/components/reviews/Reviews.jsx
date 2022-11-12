import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../Api';
import { ReviewsList } from './Reviews.styled';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  useEffect(() => {
    fetchReviewsById(movieId)
      .then(results => setReviews(results))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ReviewsList>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>

              <p>{review.created_at}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
    </>
  );
};
