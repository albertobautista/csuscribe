import useSWR, { SWRConfiguration } from 'swr';
import { Product } from '../interfaces/product';

// const fetcher = (...args: [key: string]) =>
//   fetch(...args).then((res) => res.json());

export const useContacts = (url: string, config: SWRConfiguration = {}) => {
  //   const { data, error } = useSWR<iProduct[]>(`/api${url}`, fetcher, config);
  const { data, error } = useSWR<Product[]>(`/api${url}`, config);

  return {
    contacts: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
