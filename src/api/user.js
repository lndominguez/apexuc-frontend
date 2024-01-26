import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios_default';


export function useGetUsers() {
    const URL = endpoints.user.list;
  
    const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
    const memoizedValue = useMemo(
      () => ({
        users: data || [],
        usersLoading: isLoading,
        usersError: error,
        usersValidating: isValidating,
        usersEmpty: !isLoading && !data?.length,
      }),
      [data, error, isLoading, isValidating]
    );
    console.log(memoizedValue)
  return memoizedValue;
}