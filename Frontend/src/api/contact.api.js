import api from "./axiosInstance";

export const getContactDetails = () => api.get("/contact");
export const updateContactDetails = (id, data) =>
  api.put(`/contact/${id}`, data);