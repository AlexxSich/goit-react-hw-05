import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import MovieCast from '../../components/MovieCast/MovieCast';

const HomePage = lazy(() => import('../../pages/HomePages/HomePages'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadBar from '../LoadBar/LoadBar';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.appContainer}>
      <h2>Home Work #5 - Vite + React</h2>
      <Navigation />

      <Suspense fallback={<LoadBar />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </div>
  );
}
