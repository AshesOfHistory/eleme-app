<template>
  <div class="GMenu">
    <el-menu
      :defaultActive="defaultActive"
      class="el-menu-header"
      @select="handleSelect"
      mode="horizontal"
      text-color="#333"
      background-color="#f4f4f4"
      active-text-color="#F38B08"
    >
      <!--store 抽象化-->
      <div class="menu-wrapper" style="float:left"  v-for="item in $store.getters.getRouterList" :key="item.routerName">
        <el-menu-item v-if="item.children.length == 0" :index="item.routerName">{{item.value}}</el-menu-item>
        <el-submenu
          v-else
          :index="item.routerName"
          mode="vertical">
          <template slot="title">{{item.value}}</template>
          <el-menu-item :index="childItem.routerName" v-for="childItem in item.children" :key="childItem.routerName">{{childItem.value}}</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {
    },
    components: {},
    created() {

    },
    mounted() {
      this.defaultActive = this.$route.name
    },
    data() {
      return {
        defaultActive: 'index',
      };
    },
    methods: {
      handleSelect(index,indexPathArr,itemRef){
        if(indexPathArr.length > 1){
          if(indexPathArr[0] == 'Solution' || indexPathArr[0] == 'Products') {
            let path = '/'+indexPathArr.join('/')
            this.$router.push(path)
          } else {
            this.$router.push('/'+index)
          }
        } else {
          this.$router.push('/'+index)
        }
        // console.log(index,indexPathArr,itemRef)
      },
    },
    computed: {
    },
    watch:{
      $route(){
        this.defaultActive = this.$route.name
      }
    }
  };
</script>

<style lang="scss" scoped>
  .GMenu {
  }
</style>

<style lang="scss">
  .GMenu{
    margin-top: 10px;
    .el-submenu__icon-arrow{
      right:5px!important;
    }
    .el-menu-item, .el-submenu__title{
      height:30px!important;
      line-height: 30px!important;
    }
  }
</style>
