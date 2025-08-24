import axios from "axios";

const instance = axios.create({
  baseURL: "https://student-notes-sharing-app.onrender.com/api", 
  headers: {
    "Content-Type": "application/json"
  }
});

// Add a request interceptor to include auth token if present
instance.interceptors.request.use(
  (config) => {
    // Check for custom skipAuth flag
    if (config.skipAuth) return config;
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default instance;
