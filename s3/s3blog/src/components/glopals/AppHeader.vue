<template>
  <div class="AppHeader">
    <div class="logo">Sara Vue</div>
    <ul>
      <router-link to="/" tag="li" exact>
        <a class="active">Home</a>
      </router-link>
      |
      <router-link to="/about" tag="li"><a>About</a></router-link>
      |
      <router-link to="/help" tag="li"><a>Help</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.AppHeader {
  background: rgb(54, 50, 50);
  overflow: hidden;
  // color: #334c65;
  color: #8fa6bc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 4rem auto;

  .logo {
    font-size: 24px;
    padding: 1rem 4rem;
    color: #aabdcf;
    font-weight: 700;
  }
  ul {
    margin: 0;
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    margin-right: 33rem;

    li {
      padding: 1rem;
      a {
        // color: #4c657d;
        color: #aac2d9;
        :active {
          color: orange;
        }
      }

      :active {
        color: orange;
      }
    }
  }
}
</style>
