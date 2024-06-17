import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class LyFetch {
  instance: AxiosInstance;
  constructor(baseUrl: string, timeout: number) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout
    });

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T>(config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }

  get<T = any>(url: string, method = "GET", params?: any): Promise<T> {
    return this.request<T>({ url, params, method });
  }

  post<T = any>(url: string, method = "POST", data?: any): Promise<T> {
    return this.request<T>({ url, data, method });
  }
}

const lyFetch = new LyFetch(BASE_URL, TIME_OUT);
export default lyFetch;
