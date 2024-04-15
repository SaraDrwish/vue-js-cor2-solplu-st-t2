import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: "md",

  theme: {
    // indigo: "#ffaa2c",
    // error: "#bfc0cb",

    themes: {
      light: {
        // primary: "#FCE4EC",
        primary: "#d99bb0",

        secondary: "#f3f3f3",
        success: "#668c66",
      },
    },
  },
});
