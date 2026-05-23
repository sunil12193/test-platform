import api from "./axios";

export interface SignupPayload {
  userName: string;
  email: string;
  phone: string;
  password: string;
}

export const authService = {
  signup: async (payload: SignupPayload) => {
    const response = await api.post("/auth/signup", payload);

    return response.data;
  },

  signin: async (payload: { email: string; password: string }) => {
    const response = await api.post("/auth/signin", payload);

    return response.data;
  },
};
