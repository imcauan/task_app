import axios from "axios";
import { TokenService } from "@/services/token";

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

api.interceptors.response.use(undefined, (error) => {
  if (error === "403") {
    console.log("Forbidden error");
  }

  if (error === "500") {
    console.log("Internal server error");
  }
});
