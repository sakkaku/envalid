import { defineStore } from 'pinia'

export const useWaitingStore = defineStore({
    id: 'waiting',
    state: () => ({
        waitingCounter: 0,
    }),
    getters: {
        isWaiting: (state) => state.waitingCounter > 0
    },
    actions: {
        start() {
            this.waitingCounter += 1;
        },
        stop() {
            this.waitingCounter -= 1;
        },
        async waitUntil<T>(step: Promise<T>): Promise<T> {
            this.start();

            try {
                return await step;
            } finally {
                this.stop();
            }
        }
    }
})