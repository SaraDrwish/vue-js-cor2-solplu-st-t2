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
          <v-form class="pa-3" ref="form">
            <v-text-field
              :rules="inputRules"
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
            >
            </v-text-field>
            <v-textarea
              :rules="inputRules"
              label="Information"
              v-model="info"
              prepend-icon="mdi-pencil"
            >
            </v-textarea>
            <!-- /// -->
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :rules="inputRules"
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
import db from "../fb.js";
// import { getFirestore } from "firebase/firestore";

export default {
  name: "Popup",
  data() {
    return {
      title: "",
      info: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "min length has to be more than 3"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.info, "heeeee");
        const PopProject = {
          title: this.title,
          content: this.content,
          due: format(this.due, "Do MMM yyy"),
          person: "this.person",
          status: "ongoing",
        };
        // const db = getFirestore(firebaseApp);

        db
          // .collection("projects")
          // .get(PopProject)
          // .then(() => {
          //   console.log("added in db");
          // });
          .collection("projects")
          .add(PopProject)
          .then(() => {
            console.log("Added to database");
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    },
  },
  computed: {
    formatedDate() {
      return this.due ? format(this.due, "Do MMM YYY") : "";
    },
  },
};
</script>
