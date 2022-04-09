import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import API from "../../config";
import { getMovieTrending } from "../../services/apiServices";
import { MovieList } from "../../types/types";
import Spinner from "../../components/Spinner/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

function Home() {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieTrending(API)
      .then((res) => {
        setMovieList(res);
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(false);
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
    <div className="home">
      {isLoading && <Spinner />}
      {error && <h1>something went wrong</h1>}
      {!isLoading && !error && (
        <div className="home__contents">
          <div className="home__header">
            <h3>Trending Movie</h3>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <ul className="movie__list">
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
