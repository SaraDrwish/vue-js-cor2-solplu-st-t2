<template>
  <div class="HeaderApp">
    <nav>
      <ul>
        <router-link to="/" tag="li"> <a href="/">Home</a> </router-link>
        |
        <router-link to="/about" tag="li"> <a>About</a> </router-link>
        |
        <router-link to="/help" tag="li"> <a>Help</a> </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",
};
</script>
