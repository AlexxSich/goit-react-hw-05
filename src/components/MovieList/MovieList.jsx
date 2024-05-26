import css from './MovieList.module.css';
import MovieCard from '../../MovieCard/MovieCard';

export default function MovieList({ movies }) {
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li className={css.moviesListItem} key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
