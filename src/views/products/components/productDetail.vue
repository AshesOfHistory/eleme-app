<template>
  <div class="productDetail">
    detail
    <div v-html="content"></div>
  </div>
</template>

<script>
  import product from '@/data/t_products.js'
  export default {
    model: {},
    props: {
      productInfo:Object
    },
    components: {},
    mixins: [],
    created() {
    },
    mounted() {
    },
    data() {
      return {
        content: ''
      };
    },
    methods: {},
    computed: {},
    watch: {
      productInfo(val){
        this.content = val && val.Content ? val.Content : ''
      },
    },
    filters: {}
  };
</script>

<style lang="scss" scoped>
  .productDetail {
  }
</style>
