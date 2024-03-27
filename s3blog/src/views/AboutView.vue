<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      pageName: "about us",
      pageDesc: "this is about us",
    };
  },
};
</script>
