import api from "./axiosInstance";

export const getHome = () => api.get("/home");
export const updateHome = (id, data) =>
  api.put(`/home/${id}`, data);