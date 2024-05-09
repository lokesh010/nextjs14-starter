import { SWRConfiguration } from 'swr';
import fetchClient from './lib/FetchInstance';

export function createSWRConfig(config?: SWRConfiguration): SWRConfiguration {
  return {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
    fetcher: (resource, init) => fetchClient(resource, init).then((res) => res),
    ...config,
  };
}
