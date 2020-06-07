<template>
  <div class="node" @click="style = 'background:cyan'">
    <svg height="50" width="auto">
      <circle cx="32" cy="32" r="18" fill="rgb(102, 156, 202)" />
    </svg>
  </div>
</template>

<script>
//TODO: add onmousedown function to capture mouse position and get the current node.
export default {
  name: "node",
};
</script>

<style>
.node {
  text-align: center;
  height: 100%;
  cursor: pointer;
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
