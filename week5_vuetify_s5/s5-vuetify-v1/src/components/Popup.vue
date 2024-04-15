<template>
  <div>
    <v-dialog max-width="600px" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="success" v-bind="attrs" v-on="on"
          >Add a New Project</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <h2>add a new project ...</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="pa-3" ref="form">
            <v-text-field
              :rules="[inputRules]"
              v-model.trim="title"
              label="Title"
              prepend-icon="mdi-folder"
            ></v-text-field>
            <v-textarea
              :rules="[inputRules]"
              v-model.trim="info"
              label="Information"
              prepend-icon="mdi-pencil"
            ></v-textarea>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :rules="[inputRules]"
                  v-bind="attrs"
                  v-on="on"
                  label="Due Date"
                  prepend-icon="mdi-calendar-blank"
                  :value="formatedDate"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-btn
              @click="submit"
              text
              class="success mt-3 mx-0"
              :loading="loading1"
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
import analytics from "../fb";
export default {
  name: "Popup",
  data() {
    return {
      title: "",
      info: "",
      due: null,
      inputRules: [
        {
          validator: this.validateLength,
          message: "min length has to be more than 3 chars",
        },
      ],
      loading1: false,
      dialog: false,
    };
  },
  methods: {
    validateLength(val) {
      return val.length >= 3 || "min length has to be more than 3";
    },
    submit() {
      console.log("heeeee");

      if (this.$refs.form.validate()) {
        this.loading1 = true;
        const PopProject = {
          title: this.title,
          content: this.info,
          due: format(this.due, "Do MMM yyy"),
          person: "sasaaa",
          status: "ongoing",
        };
        analytics
          .collection("projects")
          .add(PopProject)
          .then(() => {
            console.log("Project added to database");
            this.loading1 = false;
            this.dialog = false;
            this.$emit("snackbar2emitEvent");
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
