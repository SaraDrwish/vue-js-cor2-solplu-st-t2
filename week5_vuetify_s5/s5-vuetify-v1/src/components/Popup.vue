<template>
  <div>
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn flat class="success" v-bind="attrs" v-on="on"
          >Add a New Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>add a new proj</h2>
        </v-card-title>
        <!-- <v-card-content>...</v-card-content> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Popup",
};
</script>
