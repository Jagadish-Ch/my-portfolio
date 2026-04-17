import api from "./axiosInstance";

export const loginAdmin = async (data) => {
  const res = await api.post("/admin/login", data);
  localStorage.setItem("token", res.data.token);
  return res;
};