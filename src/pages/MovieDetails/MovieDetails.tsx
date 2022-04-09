import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import API from '../../config';
import { getMovieDetails } from '../../services/apiServices';
import { MoviePram, MovieList } from '../../types/types';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams<MoviePram>();
  const [details, setDetails] = useState<MovieList>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getMovieDetails(API, id)
        .then((res: MovieList) => {
          setDetails(res);
          setIsLoading(false);
          setError(false);
        })
        .catch(() => {
          setError(true);
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <div className="details__box">
      {isLoading && <Spinner />}
      {error && <h1>Something went wrong</h1>}
      {!isLoading && !error && details && (
        <div className="details__contents">
          <h3 className="subHea">Movie Information</h3>
          <div className="info__box">
            <div className="imgContainer">
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                alt="poster_image"
                className="img"
              />
            </div>
            <div className="text__box">
              <h3 className="details__title">{details.original_title}</h3>
              <p>{details.overview}</p>
              <div className="date">Release Date: {details.release_date}</div>
              <div className="score">Review Score: {details.vote_average}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
