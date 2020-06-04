<template>
  <div id="node" onclick="nodePress()">
      <p>N</p>
  </div>
</template>

<script>
                    //TODO: add onmousedown function to capture mouse position and get the current node.
function nodePress() {
    document.getElementsById("node").style.color = "red";
}

</script>

<style>
.node {
    background-color:#17b978;
    text-align: center;
    padding: 6%;
}

.node:hover {
    animation-name: mouseOver;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
}

@keyframes mouseOver {
    from {background-color: #17b978;}
    to {background-color: #a7ff83;}
}

</style>