<template>
  <div
    :class="[isWall ? 'wall' : [isStart ? 'start' : [isTarget ? 'target' : 'node']]]"
    @click="handleClick()"
  >
    <svg height="65px" width="65px">
      <circle cx="32.5" cy="32.5" r="18" :fill="circleColour" @click.stop="changeCircle()" />
      <!-- <text x="20" y="37">{{ row }}:{{ col }}</text>  @click="handleClick()" -->
    </svg>
  </div>
</template>

<script>
//TODO: add onmousedown function to capture mouse position and get the current node. rgb(102, 156, 202)
export default {
  name: "node",
  props: {
    row: Number,
    col: Number
  },
  data() {
    return {
      startRow: this.$store.state.START_NODE_ROW,
      startCol: this.$store.state.START_NODE_COL,
      targetRow: this.$store.state.TARGET_NODE_ROW,
      targetCol: this.$store.state.TARGET_NODE_COL,
      isWall: false,
      isStart: false,
      isTarget: false,
      circleColour: "rgb(102, 156, 202)"
    };
  },
  methods: {
    handleClick() {
      this.isWall = !this.isWall;
    },
    markStartTarget() {
      if (this.row == this.startRow && this.col == this.startCol) {
        this.isStart = true;
      } else if (this.row == this.targetRow && this.col == this.targetCol) {
        this.isTarget = true;
      }
    },
    changeCircle() {
      this.circleColour = "#fff";
    }
  },
  mounted() {
    this.markStartTarget();
  }
  // Add computed to mark Start and Target
  // methods: {
  //   moving() {
  //     if (this.captureToggle) {
  //       this.isWall = !this.isWall;
  //     }
  //   },
  //   captureOn() {
  //     this.captureToggle = true;
  //   },
  //   captureOff() {
  //     this.captureToggle = false;
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
  background: rgb(87, 14, 221);
}

.start {
  cursor: pointer;
  display: block;
  margin: auto;
  background: rgb(45, 45, 184);
}

.target {
  cursor: pointer;
  display: block;
  margin: auto;
  background: cyan;
}

.node:hover {
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
}
</style>
