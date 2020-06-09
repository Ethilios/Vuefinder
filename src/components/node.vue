<template>
  <div :class="[isWall ? 'wall' : 'node']" @mouseover="mouseOver()" @click="handleClick()">
    <svg height="65px" width="65px">
      <circle cx="32.5" cy="32.5" r="18" fill="rgb(102, 156, 202)" />
      <text x="20" y="37">{{ row }}:{{ col }}</text>
    </svg>
  </div>
</template>

<script>
//TODO: add onmousedown function to capture mouse position and get the current node.
export default {
  name: "node",
  props: {
    row: Number,
    col: Number
  },
  data() {
    return {
      hovering: false,
      clicked: false,
      isWall: false,
      startRow: this.$store.state.START_NODE_ROW,
      startCol: this.$store.state.START_NODE_COL,
      targetRow: this.$store.state.TARGET_NODE_ROW,
      targetCol: this.$store.state.TARGET_NODE_COL
    };
  },
  methods: {
    mouseOver() {
      if (this.row == this.startRow && this.col == this.startCol) {
        alert("You found the Start node!");
      } else if (
        this.row == this.$store.state.TARGET_NODE_ROW &&
        this.col == this.$store.state.TARGET_NODE_COL
      ) {
        alert("You found the TARGET node!");
      } else {
        console.log("Hovering over: " + this.row + ":" + this.col);
      }
    },
    handleClick() {
      this.isWall = !this.isWall;
      // this.clicked = !this.clicked;
      // if (this.clicked) {
      //   this.isWall = true;
      // }
    }
  }
  // computed: {
  //   markStart() {
  //     if () {

  //     }
  //   },
  //   markTarget() {

  //   }
  // }
};
</script>

<style>
svg {
  display: block;
  margin: auto;
}

.node {
  cursor: pointer;
  display: block;
  margin: auto;
}

.wall {
  cursor: pointer;
  display: block;
  margin: auto;
  background: magenta;
}

/* .node:hover {
  animation-name: mouseOver;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  background: #a7ff83;
}

@keyframes mouseOver {
  from {
    background-color: #17b978;
  }
  to {
    background-color: #a7ff83;
  }
} */
</style>
