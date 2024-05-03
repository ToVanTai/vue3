<template>
    <div>
        <ABC :myProps="123434"/>
    </div>
</template>

<script>
import ABC from './ABC.vue';
export default {

    name : "ABCD",
    components:{
        ABC
    }
}
</script>