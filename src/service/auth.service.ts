import { api } from "./api";

export interface SignupPayload {
  userName: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignupResponse {
  success: boolean;
  message: string;
  link?: string;
}

export const authService = {
  signup: async (payload: SignupPayload) => {
    return api<SignupResponse>("/auth/signup", {
      method: "POST",
      body: payload,
    });
  },

  signin: async (payload: { email: string; password: string }) => {
    return api("/auth/signin", {
      method: "POST",
      body: payload,
    });
  },
};
