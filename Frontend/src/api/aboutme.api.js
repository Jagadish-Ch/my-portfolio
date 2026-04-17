import api from "./axiosInstance";

// GET all
export const getAboutMe = async () => await api.get("/about");

// CREATE
export const createAboutMe = (data) =>
  api.post("/about", data);

// UPDATE
export const updateAboutMe = (id, data) =>
  api.put(`/about/${id}`, data);

// DELETE
export const deleteAboutMe = (id) =>
  api.delete(`/about/${id}`);