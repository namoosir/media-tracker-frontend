import { defineStore } from 'pinia';
import type { YoutubeStore } from './types';

export const useYoutubeStore: YoutubeStore = defineStore('youtube', {
    state: () => ({

    }),

    getters: {
        finishedSync() {
            return false;
        }
    },

    actions: {

    }
});