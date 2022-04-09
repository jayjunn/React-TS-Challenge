import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getMovieTrending } from "../../services/apiServices";
import API from "../../config";
import styles from "./Home.module.css";
import { Data } from "../../types/dataType";

function Home() {
  const [movieList, setMovieList] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMovieTrending(API)
      .then((res) => {
        setMovieList(res);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, []);

  console.log(movieList);
  return (
    <div className={styles.container}>
      {isLoading && <div>loading</div>}
      {error && <h1>errors,{error}</h1>}
      {!isLoading && !error && (
        <div className={styles.contents}>
          <div className={styles.search}>
            <h3>Trending Movie</h3>
          </div>
          <ul className={styles.ul}>
            {movieList.map((i) => {
              return (
                <Card
                  key={i.id}
                  id={i.id}
                  title={i.title}
                  image={i.poster_path}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
