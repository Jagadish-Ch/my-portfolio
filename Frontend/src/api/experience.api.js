import api from "./axiosInstance";

// GET all
export const getExperiences = async () => await api.get("/experiences");
// GET by ID
export const getExperienceById = (id) =>
  api.get(`/experiences/${id}`);

// CREATE
export const createExperience = (data) =>
  api.post("/experiences", data);

// UPDATE
export const updateExperience = (id, data) =>
  api.put(`/experiences/${id}`, data);

// DELETE
export const deleteExperience = (id) =>
  api.delete(`/experiences/${id}`);