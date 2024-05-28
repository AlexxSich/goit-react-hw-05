import {
  NavLink,
  useParams,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';

import css from './MovieDetailsPage.module.css';
import { useEffect, useState } from 'react';

import LoadBar from '../../components/LoadBar/LoadBar';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import { getMovieById } from '../../movieList-api';
import { toast } from 'react-toastify';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLink = location.state ?? '/';

  const [movieById, setMovieById] = useState(null);

  useEffect(() => {
    const fetchedMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovieById(movieId);
        setMovieById(data);
      } catch {
        toast.error('Something went wrong!!! Try to reload the page...');
      } finally {
        setLoading(false);
      }
    };
    fetchedMovies();
  }, [movieId]);

  return (
    <div className={css.detailsContainer}>
      <hr />
      {loading && <LoadBar />}
      <Link className={css.cardLink} to={backLink}>
        Go back
      </Link>
      {movieById && <MovieDetailsCard movieById={movieById} />}
      <hr />
      <h3>Additional Information</h3>
      <ul>
        <li>
          <NavLink to="cast" state={{ ...location.state }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ ...location.state }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
