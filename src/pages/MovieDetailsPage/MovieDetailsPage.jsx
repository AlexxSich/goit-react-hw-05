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
import toast from 'react-hot-toast';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  console.log(location);

  const backLink = location.state ?? '/';

  const [movieById, setMovieById] = useState(null);

  useEffect(() => {
    const fetchedMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovieById(movieId);
        setMovieById(data);
      } catch {
        toast.error('Something went wrong. Try again...');
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
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
