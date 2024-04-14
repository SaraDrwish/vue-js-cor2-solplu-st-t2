<template>
  <div class="Projects">
    <v-subheader grey--text class="px-4 py-4"> Projects Page</v-subheader>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="pr in myProjects" :key="pr.title">
          <v-expansion-panel-header> Project Title </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div :v-slot="header" class="">{{ pr.title }}</div>
            <v-card flat>
              <v-card-text class="grey--text pa-2">
                <div class="font-weight-bold">
                  due XX .XX.XXX == {{ pr.due }}
                </div>
                <div>{{ pr.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "projects",
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
        {
          title: "wooowww",
          person: "nene",
          due: "XXXXXX",
          status: "completed",
          content: "lwwwwwwwwwwwwwwwwwwwww5lorem15lorem15",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((prj) => {
        return prj.person === "nene";
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
