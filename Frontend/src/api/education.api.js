import api from "./axiosInstance";

// GET all
export const getEducations = async () => await api.get("/education");
// GET by ID
export const getEducationById = (id) =>
  api.get(`/education/${id}`);

// CREATE
export const createEducation = (data) =>
  api.post("/education", data);

// UPDATE
export const updateEducation = (id, data) =>
  api.put(`/education/${id}`, data);

// DELETE
export const deleteEducation = (id) =>
  api.delete(`/education/${id}`);