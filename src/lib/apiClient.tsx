import axios from "axios";

const baseUrl = "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
