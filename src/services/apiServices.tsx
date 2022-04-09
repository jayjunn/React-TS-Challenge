import axios from "axios";
import { Api } from "../types/types";

export const getMovieTrending = async (api: Api) => {
  try {
    const response = await axios.get(
      `${api.BASED_URL}/trending/movie/week?api_key=${api.KEY}`
    );
    return response.data.results;
  } catch (err) {
    return err;
  }
};

export const getMovieDetails = async (api: Api, movieId: number) => {
  try {
    const response = await axios.get(
      `${api.BASED_URL}movie/${movieId}?api_key=${api.KEY}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
