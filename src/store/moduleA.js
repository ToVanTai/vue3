const moduleA = {
    namespaced: true,
    state() {
        return {
            countA: 1
        }
    },
    mutations: {
        increment(state, payload) {
            state.countA++;
        },
        decrement(state, payload) {
            state.countA--;
        }
    },
    actions: {
        increment(context, payload) {
            context.commit('increment', payload );
        },
        decrement(context, payload) {
            context.commit('decrement', payload);
        }
    },
    getters: {
        getCount: (state)=>{//state hiện tại của chương trình
            return (payload)=>{//tham số truyền vào
                return state.countA*payload;
            }
        },
        getDoubleCount: (state) => {//state hiện tại của chương trình
            return (payload)=>{//tham số truyền vào
                return state.countA * 2 * payload;
            }
        }
    }
}
export default moduleA