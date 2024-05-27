import { Link } from 'react-router-dom';

import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <Link to={`movies/${movie.id}`}>
      <div className={css.movieCardContainer}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
              : defaultImg
          }
          width="92"
          alt={`movie - ${movie.original_title}`}
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
