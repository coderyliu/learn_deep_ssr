import type { UseFetchOptions, AsyncData } from "nuxt/app";
const BASEURL = "http://codercba.com:9060/oppo-nuxt/api";

type Methods = "GET" | "POST" | "PUT" | "DELETE";
export type ResultData<T> = {
  code: number;
  data: T;
};

class LyRequest {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  request<T = any>(
    url: string,
    method: Methods,
    params?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        method,
        baseURL: this.baseUrl,
        ...options
      };
      if (method === "GET" || method === "DELETE") newOptions.query = params;
      if (method === "POST" || method === "PUT") newOptions.body = params;

      useFetch(url, newOptions)
        .then((res) => resolve(res as AsyncData<T, Error>))
        .catch((err) => reject(err));
    });
  }

  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request<T>(url, "GET", params, options);
  }

  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request<T>(url, "POST", data, options);
  }
}

export default new LyRequest(BASEURL);
