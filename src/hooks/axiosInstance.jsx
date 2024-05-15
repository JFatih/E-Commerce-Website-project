import axios from "axios";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  timeout: 3000,
});

export default instance;
