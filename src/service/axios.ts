import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// RETRY MECHANISM
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    // RETRY ONLY 1 TIME
    if (!config.__retryCount) {
      config.__retryCount = 0;
    }

    if (config.__retryCount < 1) {
      config.__retryCount += 1;

      return api(config);
    }

    return Promise.reject(error);
  },
);

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // DO NOT REFRESH TOKEN ON LOGIN API
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/login")
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const response = await axios.post(
          `${BASE_URL}/auth/refresh-token`,
          {
            refreshToken,
          }
        );

        const newAccessToken = response.data.accessToken;

        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.clear();

        window.location.href = "/sign-in";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
// GLOBAL ERROR HANDLING
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";

    toast.error(message);

    return Promise.reject(error);
  },
);

export default api;
