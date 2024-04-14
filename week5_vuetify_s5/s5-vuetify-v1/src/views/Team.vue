<template>
  <div class="team">
    <v-subheader grey--text class="px-4 py-4"> Team Page</v-subheader>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 ms6 md4 lg3 v-for="pers in team" :key="pers.name">
          <v-card text class="text-center ma-4 pa-2">
            <!-- <v-img
              color="surface-variant"
              height="200"
              src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
              cover
            ></v-img> -->
            <!-- <v-avatar
              ><v-img :src="pers.avatar" height="200" contain></v-img
            ></v-avatar> -->
            <v-avatar size="100" class="grey lighten-2"
              ><v-img :src="pers.avatar"></v-img
            ></v-avatar>

            <v-card-text>
              <div class="py-3">{{ pers.name }}</div>
              <!-- <v-subheader  >{{ pers.name }}</v-subheader> -->
              <div grey--text>{{ pers.rol }}</div>
              <!-- <p grey--text class="px-5">{{ pers.rol }}</p> -->
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
        { name: "lolo", rol: "wed dev", avatar: "/imgs/hacker.png" },
        { name: "roro", rol: "wed designer", avatar: "/imgs/man.png" },
        { name: "toto", rol: "ui/ux", avatar: "/imgs/profile.png" },
        { name: "meme", rol: " ux", avatar: "/imgs/wom.png" },
        { name: "lyly", rol: "ui ", avatar: "/imgs/woman.png" },
      ],
    };
  },
};
</script>
