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
        <el-submenu v-else :index="item.routerName" mode="vertical">
          <template slot="title">{{item.value}}</template>
          <el-menu-item :index="childItem.routerName" v-for="childItem in item.children" :key="childItem.routerName">{{childItem.value}}</el-menu-item>
        </el-submenu>
      </div>

      <!--<el-menu-item index="index">Home</el-menu-item>-->
      <!--<el-menu-item index="About">About Us</el-menu-item>-->
      <!--<el-menu-item index="News">News</el-menu-item>-->
      <!--<el-submenu index="Products" mode="vertical">-->
        <!--<template slot="title">Products</template>-->
        <!--<el-menu-item index="LumitekLighting">Lumitek Lighting</el-menu-item>-->
        <!--<el-menu-item index="Lumitek">Lumitek</el-menu-item>-->
        <!--<el-menu-item index="AnKuoo">AnKuoo</el-menu-item>-->
      <!--</el-submenu>-->
      <!--<el-submenu index="Solution" mode="vertical">-->
        <!--<template slot = 'title'>Solution</template>-->
        <!--<el-menu-item index="SpaceSaver">Space Saver</el-menu-item>-->
        <!--<el-menu-item index="EnergySaver">Energy Saver</el-menu-item>-->
        <!--<el-menu-item index="SuperFlat">Super Flat</el-menu-item>-->
        <!--<el-menu-item index="Desktop">Desktop</el-menu-item>-->
        <!--<el-menu-item index="Living&Accessories">Living & Accessories</el-menu-item>-->
        <!--<el-menu-item index="Comfort">Comfort</el-menu-item>-->
        <!--<el-menu-item index="One-The-Go">One-The-Go</el-menu-item>-->
        <!--<el-menu-item index="Work">Work</el-menu-item>-->
        <!--<el-menu-item index="USBCharger">USB Charger</el-menu-item>-->
      <!--</el-submenu>-->
      <!--<el-menu-item index="Downloads">Downloads</el-menu-item>-->
      <!--<el-menu-item index="Contact">Contact Us</el-menu-item>-->
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
      }
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
