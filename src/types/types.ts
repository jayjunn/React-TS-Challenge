export type Api = {
  KEY: string;
  BASED_URL: string;
};

export type MovieList = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Movie = {
  key: number;
  id: number;
  title: string;
  image: string;
};

export type MoviePram = {
  id: string;
};

export type MovieDetails = {
  id: string;
};
