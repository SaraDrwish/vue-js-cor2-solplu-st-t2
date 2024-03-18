<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelpForm/>
  </div>
</template>

<script>

import HelloWorld from "@/components/HelloWorld.vue";
import HelpForm from "@components/HelpForm.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    HelpForm,
  },
};
</script>
