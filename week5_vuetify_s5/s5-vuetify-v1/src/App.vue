<template>
  <v-app class="grey lighten-4">
    <NavBar />
    <v-main class="mx-4 mb-4">
      <!-- <v-content> -->
      <router-view></router-view>
      <!-- </v-content> -->
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
