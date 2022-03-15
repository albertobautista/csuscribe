import useSWR, { SWRConfiguration } from 'swr';

// const fetcher = (...args: [key: string]) =>
//   fetch(...args).then((res) => res.json());

export interface Contracts {
  id: number;
  contractNumber: string;
}

export interface Contacts {
  id: number;
  email: string;
  name: string;
  lastName: string;
}
interface Props {
  contracts: Contracts[];
  contacts: Contacts[];
}
export const useContacts = (url: string, config: SWRConfiguration = {}) => {
  //   const { data, error } = useSWR<iProduct[]>(`/api${url}`, fetcher, config);
  const { data, error, isValidating } = useSWR<Props>(`/api${url}`, config);

  return {
    contacts: data?.contacts || [],
    contracts: data?.contracts || [],
    // isLoading: !error && !data,
    isLoading: isValidating || (!error && !data),
    isError: error,
  };
};
