import axios from "axios";

const animeConfig = {
  baseURL: "https://api.jikan.moe/v4",
  timeout: 5000,
};

export const animeApi = axios.create(animeConfig);

const gameConfig = {
  baseURL: "https://api.rawg.io",
  timeout: 10000,
};

export const gameApi = axios.create(gameConfig);

const movieConfig = {
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
};

export const movieApi = axios.create(movieConfig);
