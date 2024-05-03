<template>
  <div id="app">
    <h1>App Component</h1>
    <router-link to="/abc">Đến trang ABC</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  // Các phương thức, dữ liệu và logic khác cho App component
};
</script>

<style>
/* CSS cho App component */
</style>
