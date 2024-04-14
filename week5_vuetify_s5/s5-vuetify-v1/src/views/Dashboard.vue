<template>
  <div class="dashboard">
    <v-subheader grey--text>Dashboardy Page</v-subheader>
    <v-container class="my-4 secondary">
      <v-layout row class="mb-6">
        <v-btn flat small color="grey" @click="sortBy">
          <v-icon left small>mdi-folder</v-icon>
          <span class="cap text-lowercase">by project name</span>
        </v-btn>
        <v-btn flat small class="mx-9" color="grey">
          <v-icon left small>mdi-account</v-icon>
          <span class="cap text-lowercase">by user</span>
        </v-btn>
      </v-layout>
      <v-card
        class="my-2 py-2 primary text-capitalize"
        flat
        v-for="proj in projects"
        :key="proj.title"
      >
        <v-layout row wrap :class="`pa-4 projc ${proj.status}`">
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
          title: "sa sa sa",
          person: "sa Ad",
          due: "12-12",
          status: "ongoing",
          content: "lorem ds ds ds ssssssssssssssssssssssssssssssssssssssss ",
        },
        {
          title: "mewe",
          person: "neppe",
          due: "14th-04-2024",
          status: "completed",
          content: "lorem15 ",
        },
        {
          title: "la la",
          person: "lala",
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
