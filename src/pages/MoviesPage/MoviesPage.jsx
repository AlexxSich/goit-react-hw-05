import { useState } from 'react';
import { searchRequest } from '../../movieList-api';
import { ToastContainer, toast } from 'react-toastify';
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
  const searchOuery = searchParams.get('query') ?? '';

  const handleSearch = async query => {
    try {
      setLoading(true);
      const data = await searchRequest(query);
      setSearchedMovies(data);
      searchParams.set('query', query);
      setSearchParams(searchParams);
    } catch (error) {
      toast.error('Something went wrong!!! Try again...');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <hr />
      <p>Try to find your favorite movie</p>
      {loading && <LoadBar />}
      <SearchForm
        onSearch={handleSearch}
        notify={notify}
        search={searchOuery}
      />
      {searchedMovies.length > 0 && <MovieList movies={searchedMovies} />}

      <ToastContainer />
    </div>
  );
}
