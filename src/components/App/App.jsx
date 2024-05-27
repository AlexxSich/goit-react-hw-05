import { Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePages/HomePages';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import MovieCast from '../../components/MovieCast/MovieCast';

import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { Toaster } from 'react-hot-toast';

import css from './App.module.css';
export default function App() {
  return (
    <div className={css.appContainer}>
      <h2>Home Work #5 - Vite + React</h2>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Toaster position="top-right" />
    </div>
  );
}
