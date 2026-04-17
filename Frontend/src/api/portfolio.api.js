import api from "./axiosInstance";

export const getPortfolio = () => api.get("/portfolio");
export const createProject = (data) =>
  api.post("/portfolio", data);
export const updateProject = (id, data) =>
  api.put(`/portfolio/${id}`, data);
export const deleteProject = (id) =>
  api.delete(`/portfolio/${id}`);