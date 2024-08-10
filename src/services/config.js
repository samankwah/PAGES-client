import axios from "axios";

const proxyUrl = "https://pages-client.netlify.app/";
const targetUrl = "https://pages-hkb.onrender.com";
const finalUrl = proxyUrl + targetUrl;
const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: finalUrl,
  withCredentials: true,
});
