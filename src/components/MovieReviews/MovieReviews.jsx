import { useParams } from 'react-router-dom';
import { getReviewInfo } from '../../movieList-api';
import LoadBar from '../LoadBar/LoadBar';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviewInfo = async () => {
      try {
        setLoading(true);
        const data = await getReviewInfo(movieId);
        setReviews(data.results);
      } catch (error) {
        toast.error('Something went wrong. Try again...');
      } finally {
        setLoading(false);
      }
    };
    reviewInfo();
  }, [movieId]);

  return (
    <>
      {loading && <LoadBar />}
      <div className={css.reviewContainer}>
        <ul className={css.reviewList}>
          {reviews.map(review => (
            <li key={review.id}>
              <hr />
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
