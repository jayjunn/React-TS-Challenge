import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getMovieTrending } from "../../services/apiServices";
import API from "../../config";
import styles from "./Home.module.css";
import { MovieList } from "../../types/types";
import Spinner from "../../components/Spinner/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  console.log(searchTerm);
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

  const filterMovies = () => {
    const LCSearchTerms = searchTerm.toLowerCase();
    if (searchTerm) {
      return movieList.filter((item) =>
        item.title.toLowerCase().includes(LCSearchTerms)
      );
    }
    return movieList;
  };

  const filteredList = filterMovies();

  return (
    <div className={styles.container}>
      {isLoading && <Spinner />}
      {error && <h1>errors,{error}</h1>}
      {!isLoading && !error && (
        <div className={styles.contents}>
          <div className={styles.search}>
            <h3>Trending Movie</h3>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <ul className={styles.ul}>
            {filteredList.map((i) => {
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
