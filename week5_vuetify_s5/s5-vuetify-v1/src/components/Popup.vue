<template>
  <div>
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="success" v-bind="attrs" v-on="on"
          >Add a New Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>add a new project ...</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="pa-3">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
            >
            </v-text-field>
            <v-textarea
              label="Information"
              v-model="info"
              prepend-icon="mdi-pencil"
            >
            </v-textarea>
            <v-btn @click="submit" text class="success mt-3 mx-0"
              >Add Project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      title: "",
      info: "",
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.info, "heeeee");
    },
  },
};
</script>
