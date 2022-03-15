import useSWR, { SWRConfiguration } from 'swr';

// const fetcher = (...args: [key: string]) =>
//   fetch(...args).then((res) => res.json());

export interface Client {
  id: number;
  value: number;
  text: string;
}
export const useClients = (url: string, config: SWRConfiguration = {}) => {
  //   const { data, error } = useSWR<iProduct[]>(`/api${url}`, fetcher, config);
  const { data, error } = useSWR<Client[]>(`/api${url}`, config);

  return {
    clients: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
