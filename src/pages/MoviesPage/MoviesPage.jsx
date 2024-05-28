import { useEffect, useState } from 'react';
import { searchRequest } from '../../movieList-api';
import { toast } from 'react-toastify';
import LoadBar from '../../components/LoadBar/LoadBar';

import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import css from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const notify = () => toast.error('Try to put something in the input field');

  const [loading, setLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;
    setSearchedMovies([]);
    setLoading(true);

    async function nextMoviesList(searchOuery) {
      try {
        const data = await searchRequest(searchOuery);
        if (!data.length) {
          toast.error("Sorry. We can't find your movie. Try again...");
          return;
        }
        setSearchedMovies(data);
      } catch (error) {
        toast.error('Something went wrong!!! Try to reload the page...');
      } finally {
        setLoading(false);
      }
    }
    nextMoviesList(searchQuery);
  }, [searchQuery]);

  const handleSearch = query => {
    setLoading(true);
    searchParams.set('query', query);
    setSearchParams(searchParams);
  };

  return (
    <div className={css.container}>
      <hr />
      <p>Try to find your favorite movie</p>
      {loading && <LoadBar />}
      <SearchForm onSearch={handleSearch} notify={notify} />
      {searchedMovies.length > 0 && <MovieList movies={searchedMovies} />}
    </div>
  );
}
