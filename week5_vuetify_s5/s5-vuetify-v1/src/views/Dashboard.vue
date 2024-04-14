<template>
  <div class="dashboard">
    <h2 class="subheading gray--text yellow pa-1">dashboardy page</h2>
    <v-container class="my-5 orange">
      <p>dashboardy container</p>
      <v-card flat class="pa-2 green">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <div class="caption gray--text red">proj titile</div>
            <div class="">create a new web</div>
          </v-flex>
          <v-flex xs6 ms4 md2>
            <div class="caption gray--text red">person</div>
            <div class="">sasas web</div>
          </v-flex>
          <v-flex xs6 ms4 md2>
            <div class="caption gray--text red">due by</div>
            <div class="">14th-04-2024</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "dashboard",
};
</script>
