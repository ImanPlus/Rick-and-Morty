import axios from "axios";

const API_Base_URL = "https://rickandmortyapi.com/api";

export const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: API_Base_URL,
  });
  return instance;
};
