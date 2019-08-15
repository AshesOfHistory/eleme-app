<template>
  <div class="GMenu">
    <el-menu
      :defaultActive="defaultActive"
      class="el-menu-header"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Abork</el-menu-item>
      <el-menu-item index="3">News</el-menu-item>
      <el-submenu index="4" mode="vertical">
        <template slot="title">Products</template>
        <el-menu-item index="4-1">Lumitek Lighting</el-menu-item>
        <el-menu-item index="4-2">Lumitek</el-menu-item>
        <el-menu-item index="4-3">anKuoo</el-menu-item>
      </el-submenu>
      <el-submenu index="5" mode="vertical">
        <template slot = 'title'>Solution</template>
        <el-menu-item index="5-1">Space Saver</el-menu-item>
        <el-menu-item index="5-2">Energy Saver</el-menu-item>
        <el-menu-item index="5-3">Super Flat</el-menu-item>
        <el-menu-item index="5-4">Desktop</el-menu-item>
        <el-menu-item index="5-5">Living & Accessories</el-menu-item>
        <el-menu-item index="5-7">Comfort</el-menu-item>
        <el-menu-item index="5-8">One-The-Go</el-menu-item>
        <el-menu-item index="5-9">Work</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">Download</el-menu-item>
      <el-menu-item index="7">Contack Us</el-menu-item>
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
    },
    data() {
      return {
        defaultActive: '1',
      };
    },
    methods: {
      handleSelect(index,indexPath,item){
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
