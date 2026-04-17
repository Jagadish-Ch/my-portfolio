import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-portfolio-server-delta-umber.vercel.app/api",
});

// attach token automatically
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default instance;