import axios from "axios";

export const api = axios.create({
  baseURL: `${"http://staging.vehito.com:8080/vehito/"}`,
  timeout: 30000,
});
