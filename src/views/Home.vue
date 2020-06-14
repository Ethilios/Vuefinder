<template>
  <div class="home">
    <div class="top-bar">
      <h1>VueFinder</h1>
      <button class="menu-button" @click="runAnimation()">START</button>
      <button class="menu-button" @click="clearGrid()">CLEAR</button>
    </div>
    <div class="grid-container">
      <nodeGrid :key="gridKey"></nodeGrid>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import nodeGrid from "@/components/nodeGrid.vue";

export default {
  name: "Home",
  components: {
    nodeGrid
  },
  data() {
    return {
      gridKey: 0
    };
  },
  methods: {
    clearGrid() {
      this.gridKey += 1;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Muli:wght@600&display=swap");

.top-bar {
  margin: 0 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  display: flex;
  flex: content;
  justify-content: center;
  color: aliceblue;
  order: 2;
}

.menu-button {
  /* Positioning */
  flex-basis: 10%;
  box-sizing: border-box;
  padding: auto 0;
  /* Appearance */
  border: none;
  border-radius: 10px;
  background: rgb(45, 45, 184);
  color: aliceblue;
  font-size: medium;
  font-weight: 600;
  font-family: "Muli", sans-serif;
  cursor: pointer;
}

.menu-button:nth-child(1) {
  order: 1;
}
.menu-button:nth-child(3) {
  order: 2;
}

.menu-button:hover {
  background: rgb(8, 173, 173);
}

.grid-container {
  border-radius: 15px; /* TODO: Make this work */
  margin: 1% 5% 1% 5%;
}
</style>
