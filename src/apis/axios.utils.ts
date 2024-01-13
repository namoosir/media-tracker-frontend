import axios from 'axios';
import { useAuthStore } from '@/stores/auth/auth';

export function createAxiosInstance(baseURL: string, includeAuth: boolean = true) {
  const ax = axios.create({ baseURL });

  ax.interceptors.request.use(
    (axConfig) => {
      if (includeAuth) {
        const authStore = useAuthStore()
        console.log("BEING RAN")
        axConfig.headers.Authorization = `Bearer ${authStore.token}`;
      }
      return axConfig;
    },
    (error) => Promise.reject(error)
  );

//   ax.interceptors.response.use(
//     (response) => {
//       if (axOptions.camelizeKeys || response?.config?.camelizeKeys) {
//         return humps.camelizeKeys(response);
//       }
//       return response;
//     },
//     (error) => {
//       const token = browserStorageGetItem(axOptions.storageTokenKey);
//       if (token && error.response) {
//         // we do const { status, data } = error.response.
//         // want to make sure error.response exists.
//         redirectIfBadToken(error);
//       }
//       return Promise.reject(error);
//     }
//   );

  return ax;
}
