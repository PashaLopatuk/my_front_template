import {api} from "../const";
import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: api.url,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  (error) => {
    Promise.reject(error).then();
  }
);
