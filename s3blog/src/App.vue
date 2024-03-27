<template>
  <div id="app">
    <nav>
      <AppHeader />
    </nav>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/glopals/AppHeader.vue";
export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #728da8;
}
</style>
