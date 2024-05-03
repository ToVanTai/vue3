<template>
    <div>
        <!--dành cho ref-->
            <h2>dành cho ref</h2>
            <p>{{ count }}</p>
            <p>{{ doubledCount }}</p>
            <button @click="incrementCount">Tăng count</button>
            <button @click="decrementCount">Giảm count</button>
        <!--dành cho reactive-->
            <h2>dành cho reactive</h2>
            <p>{{ countReactive.count }}</p>
            <p>{{ doubledCountReactive }}</p>
            <button @click="incrementCountReactive">Tăng count Reactive</button>
            <button @click="decrementCountReactive">Giảm count Reactive</button>
            <button @click="test1">test1</button>
    </div>
</template>

<script>
import { ref, reactive, computed, watch, getCurrentInstance } from 'vue';
export default {

    name : "ABC",
    props: {
        myProps: {
            type:  "string",
            default: null
        }
    },
    setup() {
        const {proxy} = getCurrentInstance();
        const count = ref(0);
        const countReactive = reactive({
            count: 0,
        });
        const doubledCount = computed(() => count.value * 2);
        const doubledCountReactive = computed(() => countReactive.count * 2);

        const incrementCount = () => {
            count.value++;
        };
        const decrementCount = () => {
            count.value--;
        };
        const incrementCountReactive = () => {
            incrementCount();
            countReactive.count++;
        };
        const decrementCountReactive = () => {
            countReactive.count--;
        };
        watch(count, (newCount, oldCount) => {
            console.log(`Giá trị mới của count là ${newCount}`);
        });
        watch(() => countReactive.count, (newCount, oldCount) => {
            console.log(`Giá trị mới của countcountReactive là ${newCount}`);
        });
        return {
            count,
            countReactive,
            doubledCount,
            doubledCountReactive,
            incrementCount,
            decrementCount,
            incrementCountReactive,
            decrementCountReactive,
        };
    },
    methods: {
        test1(){
            let me = this;//có thể truy cập đến phương thức kia kk
            
        }
    },
    data(){
        return {
            tai: 5
        }
    }
}
</script>