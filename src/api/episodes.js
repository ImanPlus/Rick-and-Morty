import { createAxiosInstance } from "./http";

// Get all episodes
export const getAllEpisodes = (page = "") => {
  const axiosInstance = createAxiosInstance();
  let url = "/episode";
  if (page) {
    url = `${url}?page=${page}`;
  }
  return axiosInstance.get(url);
};

// Get a single episode
export const getEpisode = (id) => {
  if (!id || typeof id !== "string") {
    return;
  }
  const axiosInstance = createAxiosInstance();
  // return get(`https://rickandmortyapi.com/api/episode/${id}`);
  return axiosInstance.get(`/episode/${id}`);
};

// Get multiple episodes
export const getMultipleEpisodes = (ids) => {
  if (!ids || !ids.length) {
    return;
  }
  const axiosInstance = createAxiosInstance();
  const params = { ids: ids.join(",") };
  return axiosInstance.get("/episode/", { params });
};

// Filter episodes
export const filterEpisodes = (params) => {
  if (!params) return;

  const axiosInstance = createAxiosInstance();
  return axiosInstance.get(`/episode/?${new URLSearchParams(params)}`);
};
