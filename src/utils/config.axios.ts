import axios from "axios";
import { serverUrl } from "../constants/env.constants";
axios.defaults.withCredentials = true;
export const api = axios.create({
  baseURL: serverUrl,
});
