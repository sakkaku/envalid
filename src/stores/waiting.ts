import { defineStore } from 'pinia'

export const useWaitingStore = defineStore({
    id: 'waiting',
    state: () => ({
        activeCounter: 0,
    }),
    getters: {
        isActive: (state) => state.activeCounter > 0
    },
    actions: {
        start() {
            this.activeCounter += 1;
        },
        stop() {
            this.activeCounter -= 1;
        },
        waitUntil<T>(step: Promise<T>): Promise<T> {

        }
    }
})