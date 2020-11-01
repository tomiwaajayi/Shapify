<template>
  <div id="app">
    <shapify></shapify>
  </div>
</template>

<script>
import Shapify from "./components/Shapify/Shapify.vue";

export default {
  name: "App",
  components: { shapify: Shapify },
};
</script>

<style>
@import url("./assets/Styles/style.css");
</style>
