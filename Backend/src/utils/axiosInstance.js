const axios = require("axios");

// Create an instance of Axios with base URL and content type header
const axiosInstance = axios.create({
  baseURL: process.env.REST_API, // Make sure REACT_APP_API environment variable is set
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = axiosInstance;
