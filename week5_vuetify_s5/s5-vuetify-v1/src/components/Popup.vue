<template>
  <div>
    <!-- https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere -->
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
            <!-- /// -->
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :v-slot="activator"
                  v-bind="attrs"
                  v-on="on"
                  label="Due Date"
                  prepend-icon="mdi-calendar-blank"
                  :value="formatedDate"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <!-- /// -->
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
import format from "date-fns/format";
export default {
  name: "Popup",
  data() {
    return {
      title: "",
      info: "",
      due: null,
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.info, "heeeee");
    },
  },
  computed: {
    formatedDate() {
      return this.due ? format(this.due, "Do MMM YYY") : "";
    },
  },
};
</script>
