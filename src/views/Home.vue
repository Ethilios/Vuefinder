<template>
  <div class="home">
    <h1 @click="testfn">VueFinder</h1>
    <div class="grid-container">
      <nodeGrid></nodeGrid>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import nodeGrid from '@/components/nodeGrid.vue';

export default {
  name: "Home",
  components: {
    nodeGrid
  },
  methods: {
    testfn: function() {
      document.getElementsByTagName("h1").style.color = "green";
    }
  }
};
</script>

<style>
h1 {
  margin-left: 40vw;
  color: aliceblue;
  margin-bottom: 0;
  cursor: pointer;
}

.grid-container {
  border-radius: 15px;  /* TODO: Make this work */
  margin: 2% 5%;
}
</style>