import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
    }),
    mutations: {
        incrementV2(state) {
            this.count++;
        },
        decrementV2(state) {
            this.count--;
        }
    },
    actions:{
        increment(payload) {
            this.count++;
        },
        decrement(payload) {
            this.count--;
        }
    },
    getters: {
        getCount: (state)=>{
            return (payload)=>state.count*payload;
        }
    }
});