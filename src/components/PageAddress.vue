<template>
  <div class="PageAddress">
    <div style="font-size: 16px;text-align: left;">
      Home -
      <span style="color:#999;">{{getPageTitle}}</span>
      - {{currentChildPage}}
    </div>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {
      currentChildPage:String,
    },
    components: {},
    created() {
    },
    mounted() {
    },
    data() {
      return {};
    },
    methods: {},
    computed: {
      getPageTitle(){
        if (this.$route.name == 'News') {
          return 'News Center'
        }
        return this.$route.name
      }
    },
  };
</script>

<style lang="scss" scoped>
  .PageAddress {
  }
</style>
