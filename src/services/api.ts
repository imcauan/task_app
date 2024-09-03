import axios from "axios";
import { TokenService } from "./token";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: `${baseURL}`,
});

api.interceptors.request.use((config) => {
  const token = TokenService.getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
