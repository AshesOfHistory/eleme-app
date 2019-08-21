<template>
  <div class="PageAddressRight">
    <slot></slot>
    <div class="flex-end-wrapper">
      <div class="page-address-item">HOME</div>
      <i class="el-icon-right" style="margin-left: 15px;"></i>
      <div class="page-address-item">{{getPageTitle}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {},
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
          return 'NEWS CENTER'
        }
        if (this.$route.name == 'About') {
          return 'ABOUT US'
        }
        return this.$route.name.toLocaleUpperCase()
      }
    },
  };
</script>

<style lang="scss" scoped>
  .PageAddressRight {
    display: flex;
    .page-address-item{
      margin-left: 15px;
      background: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      padding:0 10px;
      font-size: 12px;
    }
  }
</style>
