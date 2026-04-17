import api from "./axiosInstance";

// GET all
export const getCertifications = async () => await api.get("/certifications");
// GET by ID
export const getCertificationById = (id) =>
  api.get(`/certifications/${id}`);

// CREATE
export const createCertification = (data) =>
  api.post("/certifications", data);

// UPDATE
export const updateCertification = (id, data) =>
  api.put(`/certifications/${id}`, data);

// DELETE
export const deleteCertification = (id) =>
  api.delete(`/certifications/${id}`);