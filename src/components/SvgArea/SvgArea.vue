<template>
  <div id="svg-area">
    <div v-if="shapes.length === 0">
      <h2>Toggle menu to create a Shape</h2>
    </div>
    <div v-for="shape in shapes" :key="shape" v-html="shape"></div>
  </div>
</template>

<script>
export default {
  props: { shapes: Array },
};
</script>

<style scoped>
@import url("./SvgArea.css");
</style>