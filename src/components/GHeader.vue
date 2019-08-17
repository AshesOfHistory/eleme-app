<template>
  <div class="GHeader">
    <header class="g-header">
      <div class="flex-box">
        <img src="@/assets/logo.jpg" alt="" class="logo">
        <div class="header-right">
          <div class="">
            <el-input placeholder="Please enter the product type" v-model="search" prefix-icon="el-icon-search"></el-input>
            <g-menu></g-menu>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import GMenu from '@/components/GMenu'
  export default {
    model: {},
    props: {},
    components: {GMenu},
    created() {
    },
    mounted() {
    },
    data() {
      return {search: ''};
    },
    methods: {},
    computed: {},
  };
</script>

<style lang="scss" scoped>
  .GHeader {
    .logo{
      width:170px;
    }
    .g-header{
      padding-bottom:20px;
    }

    .header-right{
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }
</style>
