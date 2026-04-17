import api from "./axiosInstance";

export const getServices = () => api.get("/services");
export const updateServices = (id, data) =>
  api.put(`/services/${id}`, data);