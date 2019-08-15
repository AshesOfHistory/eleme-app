<template>
  <div class="home">
    <index></index>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue';

export default {
  name: 'home',
  components: {
    Index,
  },
};
</script>
