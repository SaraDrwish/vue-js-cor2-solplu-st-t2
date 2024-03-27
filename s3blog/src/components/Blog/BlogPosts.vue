<template>
  <div class="BlogPosts">
    <span class="post-views">{{ views }}</span>
    <h3>{{ title }}</h3>
    <span class="date">{{ date }}</span>
    <p class="blog-content">
      {{ content }}
    </p>

    <div class="row">
      <div class="col-sm-6">
        <span class="post-auther">{{ auther }}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-catag">{{ catagory }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPosts",
  props: ["views", "title", "catagory", "auther", "content", "date"],
};
</script>

<style lang="scss" scoped>
.BlogPosts {
  background: rgb(183, 202, 207);
  padding: 2rem;
  margin: 4rem 1rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 11px lightgray;
  position: relative;
  text-align: left;
  text-transform: capitalize;

  .date {
    font-size: 11px;
    padding: 0.3rem;
  }

  .blog-content {
    line-height: 2.1;
    color: rgb(81, 104, 112);
    margin: 1rem 0 2rem 0;
  }

  .post-views {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: rgb(198, 229, 198);
    color: rgb(228, 117, 134);
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
    text-align: center;
    font-weight: bold;
    margin-left: auto;
  }

  .postAll {
    padding: 0.6rem;
    margin: 1rem 0;
    border-radius: 0.4rem;
    font-weight: bold;
  }
  .post-auther {
    @extend .postAll;
    background-color: rgb(225, 229, 198);
    color: rgb(168, 115, 97);
  }
  .post-catag {
    @extend .postAll;
    background-color: rgb(229, 201, 198);
    color: rgb(98, 98, 71);
    position: absolute;
    right: 2rem;
    bottom: 0.4rem;
  }
}
</style>
