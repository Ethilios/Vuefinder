<template>
  <div class="tnode">
      <div class="tnode--overlay">
        <span class="top left">{{ row }}</span>
        <span class="top right">{{ hCost }}</span>
        <span class="centre">{{ gCost + hCost }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "testNode",
    props: {
        row: Number,
        col: Number,
        isStart: String,
        isTarget: String,
        visited: Boolean
    },
    computed: {
        // distance from starting node
        gCost: () => {
            return this.row;
        },
        // distance from target node
        hCost: (row, col) => {
            return 10;
        }
    }
}
</script>

<style>
.tnode {
    border-radius: 5px;
    background-color: aqua;
    width:70px;
    height:70px;
    position: absolute;
}

.tnode--overlay {
    border-radius: 5px;
    position: relative;
    width: 100%;
    height: 100%;
}

.tnode--overlay:hover {
    background-color: blueviolet;
}

.top {
    position: absolute;
    top: 2%;
}

.left {
    left: 5%;
}

.right {
    right: 5%;
}

.centre {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

</style>