<template>
  <div class="dashboard">
    <v-subheader grey--text>Dashboardy Page</v-subheader>
    <v-container class="my-4 pa-5 secondary">
      <v-layout row class="mb-6">
        <v-btn small color="grey" @click="sortBy('title')">
          <v-icon left small>mdi-folder</v-icon>
          <span class="cap text-lowercase">by project name</span>
        </v-btn>
        <v-btn small class="mx-6" color="grey" @click="sortBy('person')">
          <v-icon left small>mdi-account</v-icon>
          <span class="cap text-lowercase">by user</span>
        </v-btn>
      </v-layout>
      <v-card
        class="text-capitalize"
        text
        v-for="proj in projects"
        :key="proj.title"
      >
        <v-layout row wrap :class="`pa-6 projc ${proj.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">project title:</div>
            <div class="">{{ proj.title }}</div>
          </v-flex>
          <v-flex xs6 ms4 md2>
            <div class="caption grey--text">person</div>
            <div class="">{{ proj.person }}</div>
          </v-flex>
          <v-flex xs6 ms4 md2>
            <div class="caption grey--text">due by</div>
            <div class="">{{ proj.due }}</div>
          </v-flex>
          <v-flex xs2 ms4 md2>
            <div right class="right">
              <v-chip small :class="`${proj.status} projec white--text my-2`">
                {{ proj.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      projects: [
        {
          title: "sasa",
          person: "asa Ad",
          due: "12-12",
          status: "ongoing",
          content: "lorem ds ds ds ssssssssssssssssssssssssssssssssssssssss ",
        },
        {
          title: "ammml",
          person: "neppe",
          due: "14th-04-2024",
          status: "completed",
          content: "lorem15 ",
        },
        {
          title: "lnma",
          person: "alala",
          due: "06-06",
          status: "overdue",
          content:
            "dskjksdihkds dfoasjfia jifjsifkjskjfioask ijisfjioksajfkasjf iojdsfkjaskfjskdj ",
        },
        {
          title: "meme",
          person: "nene",
          due: "10-10-2024",
          status: "completed",
          content:
            "lorem15lorem15lorem15em15lorem15lorem15lorem15l rem15vlorem15lo5lorem15lorem15",
        },
      ],
    };
  },
  methods: {
    sortBy(p) {
      this.projects.sort((a, b) => {
        a[p] < b[p] ? -1 : 1;
      });
    },
  },
};
</script>

<style>
.projc.completed {
  border-left: 4px solid #3cd1c2;
}
.projc.ongoing {
  border-left: 4px solid #ffaa22;
}
.projc.overdue {
  border-left: 4px solid tomato;
}
.v-chip.projec.overdue {
  background: tomato;
}
.v-chip.projec.ongoing {
  background: #ffaa22;
}
.v-chip.projec.completed {
  background: #3cd1c2;
}
</style>
