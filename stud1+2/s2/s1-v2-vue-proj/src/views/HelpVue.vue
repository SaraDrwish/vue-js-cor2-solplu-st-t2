<template>
  <div class="help">
    <h1>help</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore
      illo quas.
    </p>
    <HelpForm />
  </div>
</template>

<script>
import HelpForm from "@/components/HelpForm.vue";

export default {
  name: "HelpVue",
  components: {
    HelpForm,
  },
};
</script>

<style>
.help {
  margin: auto;
  padding: 1rem;
  background-image: url(../assets/6575688.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
