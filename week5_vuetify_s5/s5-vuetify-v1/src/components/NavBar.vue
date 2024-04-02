<template>
  <div class="navbar">
    <nav>
      <v-app-bar flat app>
        <v-app-bar-nav-icon
          class="gray--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase gray--text">
          <span class="font-weight-light">Todo</span>
          <span>Sara</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="gray">
          <span>SignOut</span>

          <v-icon right>mdi-export</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app class="indigo">
        <v-lis>
          <v-list-tile v-for="link in links" :key="link.text">
            <v-list-tile-action>
              <v-btn icon>
                <!-- <v-icon class="white--text">mdi-dashboard</v-icon> -->
                <v-icon class="white--text">{{ link.icon }}</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">
                {{ link.text }}</v-list-tile-title
              >
            </v-list-tile-content>
          </v-list-tile>
        </v-lis>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-widgets", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "My Team", route: "/team" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
