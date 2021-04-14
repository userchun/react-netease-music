import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { message } from 'antd';
const baseURL: string = 'https://api.mtnhao.com';
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.timeout = 5 * 1000;
    config.baseURL = baseURL;
    config.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    config.headers.post['version'] = 'v1';
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data } = res;
    if (data.code !== 200) {
      message.error(data.message);
      return Promise.reject(res);
    } else {
      return Promise.resolve(data);
    }
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  },
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: any) {
  return axios.get(url, {
    params: params,
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url: string, params: any) {
  return axios.post(url, params);
}
