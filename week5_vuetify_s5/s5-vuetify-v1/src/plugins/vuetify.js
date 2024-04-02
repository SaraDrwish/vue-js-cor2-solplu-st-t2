import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// import "../assets/style.css";

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: "md",
  theme: {
    success: "#ffc0cb",
    indigo: "#ffaa2c",
    error: "#bfc0cb",
  },
});
