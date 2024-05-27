import { Link } from 'react-router-dom';
import css from './MovieDetailsCard.module.css';

export default function MovieDetailsCard({
  movieById: {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    homepage,
  },
}) {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <>
      <div className={css.detailsCardContainer}>
        <div className={css.posterContainer}>
          <img
            className={css.moviePoster}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </div>

        <div className={css.movieDetailsText}>
          <h2 className={css.movieTitle}>{original_title}</h2>
          <p>User Score: {Math.round(vote_average) * 10}%</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h4>Genres</h4>
          <ul className={css.genresContainer}>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <Link className={css.cardLink} to={homepage}>
            Watch Movie
          </Link>
        </div>
      </div>
    </>
  );
}
