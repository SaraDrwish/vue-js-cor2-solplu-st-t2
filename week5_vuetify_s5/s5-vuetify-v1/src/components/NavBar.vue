<template>
  <div class="navbar">
    <nav>
      <!-- <v-toolbar flat app> -->
      <v-app-bar flat app>
        <!-- <v-toolbar-side-icon class="gray--text"></v-toolbar-side-icon> -->
        <v-app-bar-nav-icon
          class="gray--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase gray--text">
          <span class="font-weight-light">Todo</span>
          <span>Sara</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="gray">
          <span>SignOut</span>
          <!-- <v-icon right>mdi-exit_to_app</v-icon> -->
          <!-- <v-icon right>mdi-arrow-right</v-icon> -->
          <v-icon right>mdi-export</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- </v-toolbar> -->

      <v-navigation-drawer v-model="drawer" app class="indigo">
        <p class="error">tttttestttt</p>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
