<template>
  <div class="navbar">
    <nav>
      <!-- <v-toolbar flat app> -->
      <v-app-bar flat app>
        <v-toolbar-title class="text-uppercase gray--text">
          <span class="font-weight-light">Todo</span>
          <span class=" ">Sara</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="gray">
          <span>SignOut</span>
          <!-- <v-icon right>exit_to_app</v-icon> -->
          <!-- <v-icon :icon="`mdiSvg:${mdiAccount}`">exit_to_app</v-icon> -->
        </v-btn>
      </v-app-bar>

      <!-- </v-toolbar> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped></style>
