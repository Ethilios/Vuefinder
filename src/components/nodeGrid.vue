<template>
  <div class="nodegrid">
     <div v-for="x in 10" :key="x">
         <div v-for="y in 13" :key="y">
             <node></node>
         </div>
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
    grid-template-columns: repeat(10, 1fr);
    grid-auto-rows: minmax(50px, auto);
    margin: 3% 10%;
}

</style>