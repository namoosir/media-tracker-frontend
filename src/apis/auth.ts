import config  from '@/config';
import { createAxiosInstance } from '@/apis/axios.utils';

export const axios = createAxiosInstance(config.apiUrl);
export const noAuthAxios = createAxiosInstance(config.apiUrl, false);


export async function getSignInOauthRedirect() {
    return noAuthAxios.get(
      `/auth/sign/google`
    );
}

export async function getWhoami() {
   console.log("WHOASDMNKOA")
    return axios.get(
      `/auth/whoami`
    );
}


// Platform Connections

export async function getYoutubePlatformConnection() {
  return axios.get(
    `/PlatformConnection/mine`
  );
}
export async function getYoutubePlatformConnectionRedirect() {
   return axios.get(
     `/PlatformConnection/action/request/youtube`
   );
}