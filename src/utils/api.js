import axios from "axios";

const config = {
  baseURL: "https://api.jikan.moe/v4",
  timeout: 5000,
};

const instance = axios.create(config);

export default instance;
