import { useParams } from 'react-router-dom';
import { getReviewInfo } from '../../movieList-api';
import LoadBar from '../LoadBar/LoadBar';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';

import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
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
      {reviews.length > 0 ? (
        <div className={css.reviewContainer}>
          <ul className={css.reviewList}>
            {reviews.map(review => (
              <li className={css.comments} key={review.id}>
                <hr />
                <span className={css.user}>
                  <FaUserAlt />
                  <h3>{review.author}</h3>
                </span>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <hr />
          <p>Sorry, We cant find any reviews</p>
        </div>
      )}
    </>
  );
}
