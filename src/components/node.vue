<template>
  <div
    :class="[isWall ? 'wall' : [this.isStart ? 'start' : [this.isTarget ? 'target' : 'node']]]"
    @click="handleClick()"
  >
    <svg height="65px" width="65px">
      <circle
        cx="32.5"
        cy="32.5"
        r="18"
        :fill="[this.visited ? '#fff' : 'rgb(102, 156, 202)']"
        @click.stop="nodeVisited()"
      />
    </svg>
  </div>
</template>

<script>
//TODO: add onmousedown function to capture mouse position and get the current node. rgb(102, 156, 202)
export default {
  name: "node",
  props: {
    row: Number,
    col: Number,
    isStart: String,
    isTarget: String,
    visited: Boolean
  },
  data() {
    return {
      isWall: false
    };
  },
  methods: {
    nodeVisited() {
      this.visited = true;
    },
    handleClick() {
      this.isWall = !this.isWall;
    }
  }
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
  background: #683ae9;
}

@keyframes mouseOver {
  from {
    background-color: #7a78e4;
  }
  to {
    background-color: #683ae9;
  }
}
</style>
