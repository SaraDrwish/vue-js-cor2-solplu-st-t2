<template>
  <div class="dashboard">
    <h2 class="subheading grey--text">dashboardy page</h2>
    <v-container class="my-5">
      <!-- <p>dashboardy container</p> -->
      <v-card
        class="pa-2 text-capitalize"
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
            <!-- <div class="caption grey--text">status</div> -->
            <!-- <div class="">{{ proj.status }}</div> -->
            <div class="right">
              <v-chip small :class="`${proj.status} white--text my-2`">
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
          title: "meme",
          person: "nene",
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
            "dskjksdihkds  iofjsidfoasjfia jifjsifkjskjfioask ijisfjioksajfkasjf iojdsfkjaskfjskdj ",
        },
        {
          title: "meme",
          person: "nene",
          due: "10-10-2024",
          status: "completed",
          content: `lorem15lorem15lorem15lor
            em15lorem15lorem15lorem15lo
            rem15vlorem15lorem15lorem15lorem15lor
            em15lorem15lorem15lorem15
            lorem15lorem15lorem15lorem15lorem15 `,
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
.v-chip.overdue {
  background: tomato;
}
.v-chip.ongoing {
  background: #ffaa22;
}
.v-chip.completed {
  background: #3cd1c2;
}
</style>
