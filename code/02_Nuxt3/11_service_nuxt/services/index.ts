import type { UseFetchOptions, AsyncData } from "nuxt/app";

type Methods = "GET" | "POST" | "PUT" | "DELETE";
export interface IResultData<T> {
  code: number;
  data: T;
}

const BASE_URL = "http://codercba.com:9060/juanpi/api";

// useFetch的封装
class LyFetch {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  request<T = any>(
    url: string,
    method: Methods,
    data?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        method,
        baseURL: this.baseUrl,
        ...options
      };
      if (method === "GET" || method === "DELETE") newOptions.query = data;
      if (method === "POST" || method === "PUT") newOptions.body = data;
      useFetch(url, newOptions)
        .then((res) => resolve(res as AsyncData<T, Error>))
        .catch((err) => reject(err));
    });
  }

  get<T = any>(url: string, query?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "GET", query, options);
  }

  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "POST", data, options);
  }
}

export default new LyFetch(BASE_URL);
