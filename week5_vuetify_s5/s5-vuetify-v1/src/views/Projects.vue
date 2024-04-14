<template>
  <div class="Projects">
    <v-subheader grey--text class="px-4 py-4"> Projects Page</v-subheader>

    <v-container class="my-5">
      <!-- <v-expansion-panels>
        <v-expansion-panel
          v-for="i in 4"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></v-expansion-panel>
      </v-expansion-panels> -->
      <!-- ///// -->
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in 4" :key="i">
          <v-expansion-panel-header> Item </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- ////// -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "projects",
};
</script>

<style lang="scss" scoped></style>
