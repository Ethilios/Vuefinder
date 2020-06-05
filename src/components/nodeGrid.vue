<template>
  <div class="nodegrid">
     <div v-for="x in 338" :key="x"> <!-- TODO: Need to find a way to calculate it to be a full last row -->
        <node></node>
     </div>
  </div>
</template>

<script>
import node from '@/components/node.vue';

export default {
    name: "nodeGrid",
    components: {
        node
    }
  }
</script>

<style>
.nodegrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  grid-auto-rows: 1fr;
}

.nodegrid::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.nodegrid > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

/* Just to make the grid visible */

.nodegrid > * {
  border: 1px white solid;
  background: #3c98a0;
}



</style>