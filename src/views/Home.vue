<template>
  <div class="home">
    <nodeGrid></nodeGrid>
  </div>
</template>

<script>
// @ is an alias to /src
import nodeGrid from '@/components/nodeGrid.vue';

export default {
  name: "Home",
  components: {
    nodeGrid
  }
};
</script>
