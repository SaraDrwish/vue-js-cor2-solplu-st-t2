""
<template>
  <div class="blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="poste-erea">
            <BlogPosts />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidpar">
            <SidePare />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "../components/Blog/BlogPosts.vue";
import SidePare from "../components/Blog/SidePare.vue";
export default {
  name: "blog",
  components: {
    BlogPosts,
    SidePare,
  },
  data() {
    return {
      pageName: "Blog",
      pageDesc: "this is Bloge",
    };
  },
};
</script>
