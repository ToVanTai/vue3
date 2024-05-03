import { createStore } from 'vuex'
import moduleA from './moduleA'
import moduleB from './moduleB'

const store = createStore({
    modules: {
        moduleA,
        moduleB
    }
})

export default store