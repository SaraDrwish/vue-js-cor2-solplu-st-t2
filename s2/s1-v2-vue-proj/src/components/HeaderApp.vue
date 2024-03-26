<template>
  <div class="HeaderApp">
    <nav>
      <ul>
        <router-link to="/" tag="li" exact> <a>Home</a> </router-link>
        |
        <router-link to="/about" tag="li"> <a>About</a> </router-link>
        |
        <router-link to="/help" tag="li" replace> <a>Help</a> </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",
};
</script>

<style scoped>
nav {
  background-color: rgb(252, 197, 211);
  overflow: hidden;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: auto;
  text-align: center;
  padding: 1rem;
  gap: 1rem;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
}
.router-link-exact-active,
.router-link-active,
.active {
  color: rgb(226, 118, 17);
}
</style>
