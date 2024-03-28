import Vue from "vue";

Vue.filter("shorten", (val) => {
  return val.substring(0, 60) + "...";
});
