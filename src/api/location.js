import { createAxiosInstance } from "./http";

// Get all locations
export const getAllLocations = (page = "") => {
  const axiosInstance = createAxiosInstance();
  let url = "/location";
  if (page) {
    url = `${url}?page=${page}`;
  }
  return axiosInstance.get(url);
};

// Get a single location
export const getSingleLocation = (id) => {
  if (!id || typeof id !== "string") {
    return;
  }
  const axiosInstance = createAxiosInstance();
  return axiosInstance.get(`/location/${id}`);
};

// Get multiple locations
export const getMultiLocations = (ids) => {
  if (!ids || !ids.length) {
    return;
  }
  const axiosInstance = createAxiosInstance();
  const params = { ids: ids.join(",") };
  return axiosInstance.get("/location/", { params });
};

// Filter locations
export const filterLocations = (params) => {
  if (!params) {
    return;
  }
  const axiosInstance = createAxiosInstance();
  return axiosInstance.get(`/location/?${new URLSearchParams(params)}`);
};
