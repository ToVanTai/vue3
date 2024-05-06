<template>
    <div>
        <p>Count: {{ count(2) }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
import {useCounterStore} from './pinia/storeCounter';
import {getCurrentInstance} from 'vue';
export default {
    name: "ABC",
    props: {
        myProps: {
            type: String,
            default: null,
        },
    },
    setup(props, {
        emit
    }) {
        const counterStore = useCounterStore();

        const increment = () => {
            counterStore.increment(1);
        };
        const decrement = () => {
            counterStore.decrement(2);
        };
        return {
            count: counterStore.getCount,
            increment,
            decrement,
        }
    },
    data(){
        return {abc: 1}
    }
};
</script>
