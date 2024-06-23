import { createAxiosInstance } from "./http";

// Get all characters
export const getAllCharacters = (page = "", searchQuery = "") => {
  const axiosInstance = createAxiosInstance();
  let url = "/character";
  if (page) {
    url = `${url}?page=${page}`;
  }
  if (searchQuery) {
    url = `${url}/search?q=${searchQuery}`;
  }
  return axiosInstance.get(url);
};

// Get a single character
export const getSingleCharacter = (id) => {
  if (!id || typeof id !== "string") {
    return;
  }
  const axiosInstance = createAxiosInstance();
  return axiosInstance.get(`/character/${id}`);
};

// Get multiple characters
export const getMultipleCharacters = (ids) => {
  if (!ids || !ids.length) {
    return;
  }
  const axiosInstance = createAxiosInstance();
  const params = { ids: ids.join(",") };
  return axiosInstance.get("/character/", { params });
};

// Filter characters
export const filterCharacters = (params) => {
  if (!params) return;

  const axiosInstance = createAxiosInstance();
  return axiosInstance.get(`/character/?${new URLSearchParams(params)}`);
};
