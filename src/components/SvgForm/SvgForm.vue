<template>
  <div id="svg-form">
    <div class="form-header">
      <div class="title">Shapify</div>
      <div>
        <input class="navigation-checkbox" type="checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation-button">
          <span class="navigation-icon">&nbsp;</span>
        </label>
        <div class="navigation-background">&nbsp;</div>
        <div class="form-container">
          <form @submit.prevent>
            <label class="shape">Please Fill all feilds correctly</label>
            <!-- Shape Selector -->

            <div class="shape">
              <label for="selectShape" class="label">Select Shape</label>
              <br />
              <select v-model="selectedShape" id="selectShape">
                <option disabled value="">Select a shape</option>
                <option>Square</option>
                <option>Circle</option>
                <option>Rectangle</option>
                <option>Polygon</option>
              </select>
            </div>

            <!-- Color Selector -->
            <div class="color">
              <label for="selectColor" class="label">Select Color</label>
              <br />
              <select v-model="selectedColor" id="selectColor">
                <option disabled value="">Select a Color</option>
                <option v-for="color in colors" :key="color">
                  {{ color }}
                </option>
              </select>
            </div>

            <!-- Shape form -->
            <div class="shape-form">
              <!-- Circle Form -->
              <div
                class="circle-form circle"
                v-show="selectedShape === 'Circle'"
              >
                <label for="circle-radius" class="label">Circle Radius</label>
                <br />
                <input
                  v-model="circleRadius"
                  type="number"
                  name="circle-radius"
                  id="cirle-radius"
                  min="1"
                />
              </div>

              <!-- Rectangle Form -->
              <div
                class="rectangle-form"
                v-show="selectedShape === 'Rectangle'"
              >
                <div class="rectangle">
                  <label for="rectangle-length" class="label"
                    >Rectangle Length</label
                  >
                  <br />
                  <input
                    v-model="rectLength"
                    type="number"
                    name="rectangle-length"
                    id="rectangle-length"
                    min="1"
                  />
                </div>

                <div class="rectangle">
                  <label for="rectangle-breadth" class="label"
                    >Rectangle breadth</label
                  >
                  <br />
                  <input
                    v-model="rectBreadth"
                    type="number"
                    name="rectangle-breadth"
                    id="rectangle-breadth"
                    min="1"
                  />
                </div>
              </div>

              <!-- Square Form -->
              <div
                class="square-form square"
                v-show="selectedShape === 'Square'"
              >
                <label for="Square Length" class="label">Square Length</label>
                <br />
                <input
                  v-model="squareLength"
                  type="number"
                  name="Square length"
                  id="Square Length"
                  min="1"
                />
              </div>

              <!-- Polugon Form -->
              <div
                class="polygon-form polygon"
                v-show="selectedShape === 'Polygon'"
              >
                <h2></h2>
                <label for="Polygon-Length" class="label">Polygon Height</label>
                <br />
                <input
                  v-model="polygonHeight"
                  type="number"
                  name="Polygon Height"
                  id="Square-Height"
                  min="1"
                />

                <br />

                <label for="Polygon-Width" class="label polygon-label"
                  >Polygon Width</label
                >
                <br />
                <input
                  v-model="polygonWidth"
                  type="number"
                  name="Polygon Width"
                  id="Polygon-Width"
                  min="1"
                />

                <br />

                <label for="Polygon-Points" class="label polygon-label"
                  >Polygon Points</label
                >
                <br />
                <input
                  v-model="polygonPoints"
                  type="text"
                  name="Polygon-Points"
                  id="Polygon-Points"
                  placeholder="e.g. 200,10 250,190 160,210"
                />
              </div>

              <!-- Submit and Clear Buttons -->
              <div class="button-container">
                <button @click="drawShape" class="btn">Shapify!</button>
                <button @click="clearShapes" class="btn">Clear Shapes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CSS_COLOR_NAMES } from "../../assets/colors.js";
export default {
  data: () => ({
    selectedShape: "",
    selectedColor: "",
    circleRadius: "",
    squareLength: "",
    rectLength: "",
    rectBreadth: "",
    drawnShape: "",
    polygonHeight: "",
    polygonWidth: "",
    polygonPoints: "",
    colors: CSS_COLOR_NAMES,
  }),

  computed: {
    circlePerimeter: function () {
      return 3.14 * this.circleRadius * 2;
    },

    squarePerimeter: function () {
      return this.squareLength * 4.2;
    },

    rectPerimeter: function () {
      return this.rectLength * 2.1 + this.rectBreadth * 2.1;
    },

    polygonPerimeter: function () {
      return this.polygonHeight * 2.1 + this.polygonWidth * 2.1;
    },
  },

  methods: {
    drawShape: function () {
      // rectangle
      if (this.selectedShape === "Rectangle") {
        let shapeHtml = `<svg width="${Number(
          this.rectBreadth
        )}" height="${Number(this.rectLength)}"> <rect width="${
          this.rectBreadth
        }" height="${
          this.rectLength
        }" style="fill:transparent; stroke-width:3;stroke:${
          this.selectedColor
        }" class="animate-svg" stroke-dasharray="${
          this.rectPerimeter
        }" stroke-dashoffset="${this.rectPerimeter}"/> </svg>`;

        this.drawnShape = shapeHtml;
        this.$emit("add-shape", this.drawnShape);

        this.selectedShape = "";
        this.selectedColor = "";
        this.circleRadius = "";
        this.squareLength = "";
        this.rectLength = "";
        this.rectBreadth = "";
        this.drawnshape = "";
        this.polygonHeight = "";
        this.polygonWidth = "";
        this.polygonPoints = "";
        document.getElementById("navi-toggle").checked = false;
      }

      // Square
      else if (this.selectedShape === "Square") {
        let shapeHtml = `<svg width="${Number(
          this.squareLength
        )}" height="${Number(this.squareLength)}"> <rect width="${
          this.squareLength
        }" height="${
          this.squareLength
        }" style="fill: transparent;stroke-width:3;stroke:${
          this.selectedColor
        }" class="animate-svg"  stroke-dasharray="${
          this.squarePerimeter
        }" stroke-dashoffset="${this.squarePerimeter}"/> </svg>`;

        this.drawnShape = shapeHtml;
        this.$emit("add-shape", this.drawnShape);

        this.selectedShape = "";
        this.selectedColor = "";
        this.circleRadius = "";
        this.squareLength = "";
        this.rectLength = "";
        this.rectBreadth = "";
        this.drawnshape = "";
        this.polygonHeight = "";
        this.polygonWidth = "";
        this.polygonPoints = "";
        document.getElementById("navi-toggle").checked = false;
      }

      // Circle
      else if (this.selectedShape === "Circle") {
        let shapeHtml = `<svg height="${
          (Number(this.circleRadius) + 3) * 2
        }" width="${(Number(this.circleRadius) + 3) * 2}"> <circle cx="${
          Number(this.circleRadius) + 3
        }" cy="${Number(this.circleRadius) + 3}" r="${Number(
          this.circleRadius
        )}" stroke="${
          this.selectedColor
        }" stroke-width="3" fill="transparent" class="animate-svg"  stroke-dasharray="${
          this.circlePerimeter
        }" stroke-dashoffset="${this.circlePerimeter}"/></svg>`;
        this.drawnShape = shapeHtml;
        this.$emit("add-shape", this.drawnShape);

        this.selectedShape = "";
        this.selectedColor = "";
        this.circleRadius = "";
        this.squareLength = "";
        this.rectLength = "";
        this.rectBreadth = "";
        this.drawnshape = "";
        this.polygonHeight = "";
        this.polygonWidth = "";
        this.polygonPoints = "";
        document.getElementById("navi-toggle").checked = false;
      }

      // Polygon
      else if (this.selectedShape === "Polygon") {
        let shapeHtml = `<svg height="${this.polygonHeight}" width="${this.polygonWidth}"><polygon points="${this.polygonPoints}" style="fill:transparent;stroke:${this.selectedColor};stroke-width:3" stroke-dasharray="${this.polygonPerimeter}" stroke-dashoffset="${this.polygonPerimeter}" class="animate-svg"/></svg>`;
        this.drawnShape = shapeHtml;
        this.$emit("add-shape", this.drawnShape);

        this.selectedShape = "";
        this.selectedColor = "";
        this.circleRadius = "";
        this.squareLength = "";
        this.rectLength = "";
        this.rectBreadth = "";
        this.drawnshape = "";
        this.polygonHeight = "";
        this.polygonWidth = "";
        this.polygonPoints = "";
        document.getElementById("navi-toggle").checked = false;
      }
    },

    clearShapes() {
      this.$emit("clear-shapes");
      document.getElementById("navi-toggle").checked = false;
    },
  },
};
</script>

<style scoped>
@import url("./SvgForm.css");
</style>
