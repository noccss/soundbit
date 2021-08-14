<template>
  <div class="home_app">
    <AppBar />
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";
export default {
  name: "home",

  components: {
    AppBar,
  },
};
</script>

<style scoped>
.home_app {
    display: flex;
    width: 100vw;

    background-color: #F5F6FA;
}
</style>
