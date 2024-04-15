<template>
  <div class="navbar">
    <nav>
      <!-- ///////////////// -->
      <v-snackbar small v-model="snackbar1" :timeout="4000" top color="success">
        <span>Awsomyou !! have added the project successfully</span>
        <v-btn text color="white" @click="snackbar1 = false">close</v-btn>
      </v-snackbar>

      <!-- ///////////////// -->

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

        <!-- dropdown menu statrt -->

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small class="mx-6" v-bind="attrs" v-on="on">
              <v-icon left>mdi-chevron-down</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="lnk in links"
              :key="lnk.text"
              router
              :to="lnk.route"
            >
              <v-list-item-title>{{ lnk.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- dropdown menu end -->

        <v-btn text color="gray">
          <span>SignOut</span>

          <v-icon right>mdi-export</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app class="indigo">
        <v-layout column align-center>
          <v-flex class="mt-6">
            <v-avatar size="100">
              <img src="/imgs/wom.png" alt="womn avatar" />
            </v-avatar>
            <v-subheader class="white--text mt-2">sasa adl</v-subheader>
          </v-flex>
          <v-flex class="ma-6">
            <Popup @snackbar2emitEvent="snackbar1 = true" />
          </v-flex>
        </v-layout>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-btn icon>
                <v-icon class="white--text">{{ link.icon }}</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ link.text }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "navbar",
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-widgets", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "My Team", route: "/team" },
      ],
      snackbar1: false,
      // snackbar1: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
