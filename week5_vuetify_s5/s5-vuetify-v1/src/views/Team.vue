<template>
  <div class="team">
    <v-subheader grey--text class="px-4 py-4"> Team Page</v-subheader>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 ms6 md4 lg3 v-for="pers in team" :key="pers.name">
          <v-card text class="text-xs-center ma-4">
            <!-- <v-responsive>
              img
            </v-responsive> -->
            <v-img
              color="surface-variant"
              height="200"
              src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
              cover
            ></v-img>
            <v-card-text>
              <v-subheader>{{ pers.name }}</v-subheader>
              <p grey--text class="px-5">{{ pers.rol }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small>mdi-message</v-icon>
                <span class="mx-2">message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "team",
  data() {
    return {
      team: [
        { name: "lolo", rol: "wed dev" },
        { name: "roro", rol: "wed designer" },
        { name: "toto", rol: "ui/ux" },
        { name: "meme", rol: " ux" },
        { name: "lyly", rol: "ui " },
      ],
    };
  },
};
</script>
