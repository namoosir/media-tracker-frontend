import { defineStore } from 'pinia';
import type { AuthStore } from './types';

export const useAuthStore: AuthStore = defineStore('auth', {
  state: () => ({
    token: browserStorageGetItem('token'),
  }),

  getters: {
    isIdentified(state) {
      return !!state.token;
      // Return isValidJWT(state.token)
    },
  },

  actions: {
    setToken(token: string) {
      browserStorageSetItem('token', token);
      this.token = token;
    }
  }

});


function browserStorageGetItem(key: string): string | null {
  return localStorage.getItem(key);
}

function browserStorageSetItem(key: string, value: string){
  localStorage.setItem(key, value);
}
