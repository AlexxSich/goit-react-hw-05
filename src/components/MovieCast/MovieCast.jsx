import { useParams } from 'react-router-dom';
import LoadBar from '../LoadBar/LoadBar';
import { useState, useEffect } from 'react';
import { getCastInfo } from '../../movieList-api';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const castInfo = async () => {
      try {
        setLoading(true);
        const data = await getCastInfo(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    castInfo();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <>
      {loading && <LoadBar />}
      <ul className={css.movieCastList}>
        {movieCast.map(cast => (
          <li className={css.movieCastListItem} key={cast.cast_id}>
            <img
              className={css.actorImg}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : defaultImg
              }
              width={250}
              alt="actor"
            />
            <h3>{cast.name}</h3>
            <p>Character - {cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
