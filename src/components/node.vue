<template>
  <div class="node" @mouseover="mouseOver()">
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
      hovering: false
    };
  },
  methods: {
    mouseOver() {
      console.log("First: " + this.hovering);
      this.hovering = !this.hovering;
      console.log("Then: " + this.hovering);
    }
  }
};
</script>

<style>
svg {
  display: block;
  margin: auto;
}
</style>
