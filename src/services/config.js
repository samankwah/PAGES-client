import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: "https://pages-hdkb.onrender.com",
  withCredentials: true,
});
