<template>
  <div class="HelpForm">
    <form>
      <label>your name:</label>
      <input type="text" placeholder="yourname" />
      <label>your issue:</label>
      <textarea placeholder="enter your messege" cols="30" rows="10"></textarea>
      <input type="button" value="ask for help" />
    </form>
  </div>
</template>

<script>
export default {
  name: "HelpForm",
};
</script>

<style scoped>
.HelpForm {
  background: rgba(219, 181, 181, 0.747);
  padding: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  padding: 1rem;
  background: rgb(143, 158, 122);
  color: rgb(54, 88, 88);
  font-size: 22px;
  border-radius: 2rem;
  margin: auto;
}
form input,
form textarea {
  outline: none;
  border: none;
  border-radius: 2rem;
  padding: 1rem;
}
form input[type="button"] {
  background: burlywood;
  color: tomato;
  width: 50%;
  margin: auto;
  cursor: pointer;
}
</style>
