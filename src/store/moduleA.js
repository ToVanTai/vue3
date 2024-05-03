const moduleA = {
    namespaced: true, // Cấu hình namespace cho moduleB
    state() {
        return {
            countA: 0
        }
    },
    mutations: {
        increment(state) {
            state.countA++;
        },
        decrement(state) {
            state.countA--;
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
            return state.countA;
        }
    }
}

export default moduleA