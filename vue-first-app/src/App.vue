<template>
  <div>
    <MyComponent></MyComponent>
    <img alt="Vue logo" src="./assets/logo.png" />
    <ul>
      <friend-contact name="manuel lorenz"></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </div>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import MyComponent from "./components/MyComponent.vue";

export default {
  name: "App",
  components: {
    FriendContact,
    MyComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
