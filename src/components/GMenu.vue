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
      <el-menu-item index="Index">Home</el-menu-item>
      <el-menu-item index="About">About Us</el-menu-item>
      <el-menu-item index="News">News</el-menu-item>
      <el-submenu index="4" mode="vertical">
        <template slot="title">Products</template>
        <el-menu-item index="4-1">Lumitek Lighting</el-menu-item>
        <el-menu-item index="4-2">Lumitek</el-menu-item>
        <el-menu-item index="4-3">AnKuoo</el-menu-item>
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
    props: {},
    components: {},
    created() {
    },
    mounted() {
      this.defaultActive = this.$route.name
    },
    data() {
      return {
        defaultActive: 'Index',
      };
    },
    methods: {
      handleSelect(index,indexPath,item){
        console.log(indexPath)
        console.log(index)
        this.$router.push(index)
        // if(indexPath.length > 1){
        //   let path = '/'+indexPath.join('/')
        //   console.log(path)
        //   this.$router.push(path)
        // } else {
        //   this.$router.push(index)
        // }
        // console.log(index,indexPath,item)
      }
    },
    computed: {},
  };
</script>

<style lang="scss" scoped>
  .GMenu {
  }
</style>
