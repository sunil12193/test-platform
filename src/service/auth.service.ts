import api from "./axios";
import { Assessment } from "../type/assessment";
import { API_BASE_URL } from "@/util/APIGeneric";
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
 

export const authService = {
  signup: async (payload: SignupPayload) => {
    const response = await api.post(`${API_BASE_URL}/auth/signup`, payload);

    return response.data;
  },

  signin: async (payload: SigninPayload) => {
    const response = await api.post(`${API_BASE_URL}/auth/login`, payload);

    return response.data;
  },
  assessment: async () => {
  const response = await api.get(`${API_BASE_URL}/assessment`);

  return response.data;
},
};
