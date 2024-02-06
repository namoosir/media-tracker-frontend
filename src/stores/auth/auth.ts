import { defineStore } from 'pinia';
import type { AuthStore } from './types';
import * as AuthAPI from '@/apis/auth';

export const useAuthStore: AuthStore = defineStore('auth', {
  state: () => ({
    token: browserStorageGetItem('token'),
  }),

  getters: {
    async isIdentified(state) {
      if (!state.token) return false;
      // const response = await AuthAPI.getWhoami()
      // return response.status == 200;
      return true;
    },

    async hasPlatfromConnectionYoutube(){
      const response = await AuthAPI.getYoutubePlatformConnection();
      return response.status == 200;
    }
  },

  actions: {
    setToken(token: string) {
      browserStorageSetItem('token', token);
      this.token = token;
    },
    logout() {
      browserStorageClear();
      this.token = null;
    },
  }

});


function browserStorageGetItem(key: string): string | null {
  return localStorage.getItem(key);
}

function browserStorageSetItem(key: string, value: string){
  localStorage.setItem(key, value);
}

function browserStorageClear() {
  localStorage.clear();
}