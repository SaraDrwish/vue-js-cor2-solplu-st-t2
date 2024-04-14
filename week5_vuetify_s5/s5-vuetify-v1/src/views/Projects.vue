<template>
  <div class="Projects">
    <v-subheader grey--text class="px-4 py-4"> Projects Page</v-subheader>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in 4" :key="i">
          <v-expansion-panel-header> Project Title </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat class="grey--text pa-2">
              <v-card-title>
                <div class="font-weight-bold">due XX .XX.XXX</div>
              </v-card-title>
              <v-card-text><div>djasldjkasldjakd</div></v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "projects",
};
</script>

<style lang="scss" scoped></style>
