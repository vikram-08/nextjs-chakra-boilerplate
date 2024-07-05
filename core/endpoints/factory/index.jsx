import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import logger from "@/log";

/* The code is creating an instance of the Axios library with a specific configuration. */

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * The above function is a common function for making HTTP requests in JavaScript React.
 * @returns The function `api` returns the response data if the HTTP request is successful. If there is
 * an error, it returns the error response data or the error message.
 */

const api = async (options) => {
  try {
    const response = await axiosInstance.request(options);
    return response;
  } catch (error) {
    const message = error.response?.data || error.message;
    logger.error(message);
    return message;
  }
};

export default api;

export const queryClient = new QueryClient();
