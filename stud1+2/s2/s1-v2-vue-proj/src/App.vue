<template>
  <div id="app">
    <HeaderApp />
    <router-view />
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(113, 140, 167) 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2b3d4e;

    &.router-link-exact-active {
      color: #c496b9;
    }
  }
}
</style>
