<template>
  <div class="GMenu">
    <el-menu
      :defaultActive="defaultActive"
      class="el-menu-header"
      mode="horizontal"
      @select="handleSelect"
      text-color="#333"
      active-text-color="#F38B08"
    >
      <!--store 抽象化-->
      <!--<div style="float:left;" v-for="(item,index) in $store.state.routerData" :key="index">-->
        <!--<el-menu-item v-if="item.children.length == 0" :index="item.routerName">{{item.value}}</el-menu-item>-->
        <!--<el-submenu v-else :index="item.routerName" mode="vertical">-->
          <!--<template slot="title">{{item.value}}</template>-->
          <!--<el-menu-item :index="childItem.routerName" v-for="(childItem,index1) in item.children" :key="index1">{{childItem.value}}</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</div>-->

      <el-menu-item index="index">Home</el-menu-item>
      <el-menu-item index="About">About Us</el-menu-item>
      <el-menu-item index="News">News</el-menu-item>
      <el-submenu index="Products" mode="vertical">
        <template slot="title">Products</template>
        <el-menu-item index="LumitekLighting">Lumitek Lighting</el-menu-item>
        <el-menu-item index="Lumitek">Lumitek</el-menu-item>
        <el-menu-item index="AnKuoo">AnKuoo</el-menu-item>
      </el-submenu>
      <el-submenu index="Solution" mode="vertical">
        <template slot = 'title'>Solution</template>
        <el-menu-item index="SpaceSaver">Space Saver</el-menu-item>
        <el-menu-item index="EnergySaver">Energy Saver</el-menu-item>
        <el-menu-item index="SuperFlat">Super Flat</el-menu-item>
        <el-menu-item index="Desktop">Desktop</el-menu-item>
        <el-menu-item index="Living&Accessories">Living & Accessories</el-menu-item>
        <el-menu-item index="Comfort">Comfort</el-menu-item>
        <el-menu-item index="One-The-Go">One-The-Go</el-menu-item>
        <el-menu-item index="Work">Work</el-menu-item>
      </el-submenu>
      <el-menu-item index="Downloads">Downloads</el-menu-item>
      <el-menu-item index="Contact">Contact Us</el-menu-item>
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
      handleSelect(index,indexPath,item){
        if(indexPath.length > 1){
          if(indexPath[0] == 'Solution' || indexPath[0] == 'Products') {
            let path = '/'+indexPath.join('/')
            this.$router.push(path)
          } else {
            this.$router.push('/'+index)
          }
        } else {
          this.$router.push('/'+index)
        }
        // console.log(index,indexPath,item)
      }
    },
    computed: {
    },
    watch:{
    }
  };
</script>

<style lang="scss" scoped>
  .GMenu {
  }
</style>
