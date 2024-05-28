import { useEffect, useState } from 'react';
import { getMovies } from '../../movieList-api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePages.module.css';
import { toast } from 'react-toastify';

import LoadBar from '../../components/LoadBar/LoadBar';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function moviesList() {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        toast.error('Something went wrong. Try again...');
      } finally {
        setLoading(false);
      }
    }
    moviesList();
  }, []);

  return (
    <div className={css.container}>
      <h2>Trending today</h2>
      {loading && <LoadBar />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
