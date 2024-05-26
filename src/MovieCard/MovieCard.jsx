import { Link } from 'react-router-dom';

import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <Link to={`movies/${movie.id}`}>
      <div className={css.movieCardContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
          width="92"
        />
        <span className={css.itemDescription}>
          <h3 className={css.movieTitle}>{movie.original_title}</h3>
          <p className={css.text}>Premiere: {movie.release_date}</p>
          <p className={css.text}>Rating: {movie.vote_average}</p>
        </span>
      </div>
    </Link>
  );
}
