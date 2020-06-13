<template>
  <div class="nodegrid">
    <div class="cols" v-for="y in 26" :key="y">
      <div class="rows" v-for="x in 13" :key="x">
        <node
          class="node"
          :row="x"
          :col="y"
          :visited="false"
          :isStart="isStart(x,y)"
          :isTarget="isTarget(x,y)"
          distance="10000"
          parentNode="null"
        ></node>
      </div>
    </div>
  </div>
</template>

<script>
import node from "@/components/node.vue";

export default {
  name: "nodeGrid",
  components: {
    node
  },
  data() {
    return {
      startRow: this.$store.state.START_NODE_ROW,
      startCol: this.$store.state.START_NODE_COL,
      targetRow: this.$store.state.TARGET_NODE_ROW,
      targetCol: this.$store.state.TARGET_NODE_COL
    };
  },
  methods: {
    isStart(nodeX, nodeY) {
      if (nodeX == this.startRow && nodeY == this.startCol) {
        return true;
      }
    },
    isTarget(nodeX, nodeY) {
      if (nodeX == this.targetRow && nodeY == this.targetCol) {
        return true;
      }
    }
  }
};
</script>

<style>
.nodegrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  grid-auto-rows: 1fr;
}

.nodegrid::before {
  content: "";
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
  background: #3c98a0;
}

.rows {
  height: 65px;
  width: 65px;
}
</style>
