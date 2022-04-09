import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import API from "../../config";
import { getMovieDetails } from "../../services/apiServices";
import styles from "./MovieDetails.module.css";
import { MoviePram, MovieList } from "../../types/types";

const MovieDetails = () => {
  const { id } = useParams<MoviePram>();
  const [details, setDetails] = useState<MovieList>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    id &&
      getMovieDetails(API, id)
        .then((res) => {
          setDetails(res);
          setIsLoading(false);
          setError(null);
        })
        .catch((e) => {
          setError(e);
          setIsLoading(false);
        });
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <Spinner />}
      {error && <h1>errors,{error}</h1>}
      {!isLoading && !error && details && (
        <div className={styles.contents}>
          <h3 className={styles.subHead}>Movie Information</h3>
          <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                alt="poster_image"
                className={styles.img}
              />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.title}>{details.original_title}</h3>
              <p>{details.overview}</p>
              <div className={styles.date}>
                Release Date: {details.release_date}
              </div>
              <div className={styles.score}>
                Review Score: {details.vote_average}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
