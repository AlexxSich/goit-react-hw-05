import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzQ4Y2RhMWJiOGU3YmU5ZDc3NGEwZWM1Nzk1MWNkYyIsInN1YiI6IjY2NGU3NGY2NDA3YmFlZGY4MGJiMGFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rlGLtuxhZ1TOP9od2ICXV0XsoxJCU368YRw4n3CnvNg',
  },
};

export const getMovies = async () => {
  const response = await axios.get('trending/movie/day', options);
  return response.data.results;
};

export const getMovieById = async movieId => {
  const movieDetails = await axios.get(`/movie/${movieId}`, options);
  return movieDetails.data;
};

export const getCastInfo = async movieId => {
  const castInfo = await axios.get(`/movie/${movieId}/credits`, options);
  return castInfo.data;
};

export const getReviewInfo = async movieId => {
  const reviewInfo = await axios.get(`/movie/${movieId}/reviews`, options);
  return reviewInfo.data;
};
