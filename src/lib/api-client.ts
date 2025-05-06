import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8085",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


api.interceptors.response.use(
    (res) => res,
    async (error: AxiosError) => {
        const originalRequest = error.config!;


        if (error.response?.status === 401 && !originalRequest.headers?.["x-retried"]) {
            try {
                const refreshToken = Cookies.get("refresh_token");
                if (!refreshToken) throw new Error("No refresh token");

                const refreshRes = await axios.post(
                    `${api.defaults.baseURL}/refresh-token`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`,
                        },
                    }
                );

                const newToken = refreshRes.data.token;
                const newRefresh = refreshRes.data.refreshToken;

                localStorage.setItem("token", newToken);
                Cookies.set("refresh_token", newRefresh);


                originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
                originalRequest.headers["x-retried"] = "true";

                return api(originalRequest);
            } catch (refreshError) {

                localStorage.removeItem("token");
                Cookies.remove("refresh_token");

                if (typeof window !== "undefined") {
                    const currentPath = window.location.pathname;
                    const locale = currentPath.split("/")[1] || "tr";
                    window.location.href = `/${locale}/login`;
                }

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
