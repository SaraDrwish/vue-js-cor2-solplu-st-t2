""
<template>
  <div class="blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      pageName: "Blog",
      pageDesc: "this is Bloge",
    };
  },
};
</script>
