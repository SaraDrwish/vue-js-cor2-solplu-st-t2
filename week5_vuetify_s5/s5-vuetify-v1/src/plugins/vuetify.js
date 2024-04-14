import Vue from "vue";
// import Vuetify from "vuetify/lib/framework";
import Vuetify from "vuetify/lib";

// import "../assets/style.css";
// import { createVuetify } from "vuetify";

// import colors from "vuetify/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  iconfont: "md",

  theme: {
    // success: "#ffc0cb",
    // indigo: "#ffaa2c",
    // error: "#bfc0cb",

    themes: {
      light: {
        primary: "#FCE4EC",
        secondary: "#e8e4e4",
      },
      // info: "#bfc1cc",
      // light: {
      //   dark: false,
      //   colors: {
      //     primary: colors.red.darken1, // #E53935
      //     secondary: colors.red.lighten4, // #FFCDD2
      //   },
      // },
    },
  },
});
