<template>
  <div class="GHeader">
    <header class="g-header">
      <div class="flex-box">
        <img src="@/assets/logo.jpg" alt="" class="logo">
        <div class="header-right">
          <div>
            <div style="display: flex;justify-content: flex-end">
              <el-input
                placeholder="Please enter the product type"
                v-model="search"
                prefix-icon="el-icon-search"
                size="small"
                align="right"
                class="g-header-input"
              ></el-input>
            </div>
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
      .g-header-input{
        margin-top:20px;
        margin-bottom:10px;
        width:300px;
      }
    }

    .header-right{
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }
</style>
