const moduleB = {
    namespaced: true, // Cấu hình namespace cho moduleB
    state() {
        return {
            countB: 0
        }
    },
    mutations: {
        increment(state) {
            state.countB++;
        },
        decrement(state) {
            state.countB--;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment');
        },
        decrement(context) {
            context.commit('decrement');
        }
    },
    getters: {
        getCount(state) {
            return state.countB;
        }
    }
}

export default moduleB