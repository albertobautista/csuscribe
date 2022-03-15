import { request } from '@utils/fetch';
import { useState, useEffect } from 'react';

export function useFetchData<D>(url: string) {
  const [data, setData] = useState<D>(<D>{});

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [statusCode, setStatusCode] = useState(0);

  const makeRequest = () => {
    return request({
      route: url,
      method: 'GET',
    });
  };
  useEffect(() => {
    setLoading(true);
    makeRequest()
      .then((response) => {
        const { statusCode: statusCodeResponse } = response.data;
        if (statusCodeResponse === 200) {
          console.log('🚀 ~ file: index.tsx ~ line 32 ~ data, loading, error, statusCode1', response);
          setData(response.data);
          setError(false);
        } else {
          setError(true);
        }
        setStatusCode(statusCodeResponse);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading, statusCode };
}
