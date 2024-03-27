""
<template>
  <div class="blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="poste-erea">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :catagory="post.catagory"
              :auther="post.auther"
              :content="post.content"
              :date="post.date"
            />
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
import jsonPosts from "../json/blog_bosts.json";

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
      posts: jsonPosts,
    };
  },
};
</script>
