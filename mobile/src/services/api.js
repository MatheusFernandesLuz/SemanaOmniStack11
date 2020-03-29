import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.232.110:3333"
});

export default api;
