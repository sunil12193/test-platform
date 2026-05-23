import api from "./axios";
import { Assessment } from "../type/assessment";
export interface SignupPayload {
  userName: string;
  email: string;
  phone: string;
  password: string;
}
export interface SigninPayload {
  email: string;
  password: string;
}

export const BASE_URL = "https://platform-backend-v8zh.onrender.com/api";

export const authService = {
  signup: async (payload: SignupPayload) => {
    const response = await api.post(`${BASE_URL}/auth/signup`, payload);

    return response.data;
  },

  signin: async (payload: SigninPayload) => {
    const response = await api.post(`${BASE_URL}/auth/login`, payload);

    return response.data;
  },
  assessment: async () => {
  console.log("API Calling Started");

  const response = await api.get("/assessment");

  console.log("API Response:", response);

  return response.data;
},
};
