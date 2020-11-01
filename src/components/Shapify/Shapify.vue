<template>
  <div id="shapify">
    <svg-form @add-shape="addShape" @clear-shapes="clearShapes"></svg-form>
    <svg-area :shapes="drawnShapes"></svg-area>
  </div>
</template>

<script>
import SvgForm from "../SvgForm/SvgForm";
import SvgArea from "../SvgArea/SvgArea";

export default {
  name: "App",
  components: { "svg-form": SvgForm, "svg-area": SvgArea },

  data: () => ({
    drawnShapes: [],
  }),
  methods: {
    addShape(shapes) {
      this.drawnShapes.push(shapes);
      window.localStorage.setItem("shapes", JSON.stringify(this.drawnShapes));
    },

    clearShapes() {
      this.drawnShapes = [];
      window.localStorage.clear();
    },
  },
  mounted() {
    if (window.localStorage.shapes) {
      let retreivedShapes = JSON.parse(window.localStorage.getItem("shapes"));
      this.drawnShapes = [...retreivedShapes];
    }
  },
};
</script>

<style>
@import url("./Shapify.css");
</style>
