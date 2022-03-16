import axios, { AxiosRequestHeaders, Method } from 'axios';
interface Props {
  route: string;
  method: Method;
  headers?: AxiosRequestHeaders;
  body?: {};
}
export const request = ({ route, method = 'GET', headers, body }: Props) => {
  return axios.request({
    url: route,
    method,
    headers,
    data: body && JSON.stringify(body),
  });
};
