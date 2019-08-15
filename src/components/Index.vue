<template>
  <div class="index">
    <header>
      <div class="flex-box">
        <img src="../assets/logo.png" alt="" class="logo">
        <div class="header-right">
          <el-input placeholder="Please enter the product type" v-model="search" prefix-icon="el-icon-search"></el-input>

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
      </div>
    </header>

    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>




  </div>
</template>

<script>
export default {
  methods:{
    handleSelect(index,indexPath,item){
      console.log(index,indexPath,item)
    }
  },
  data(){
    return {
      defaultActive: '1',
      search: '',
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .s-img{
    width:100%;
    height:300px;
  }
  .logo{
    width:100px;
    height:50px;
  }
  .flex-box{
    display: flex;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #ccc;
  }



</style>
<style lang="scss">
.swiper-pagination{
  left: 50%;
  margin-left: -24px;
  bottom: 10px;
  z-index: 10000;
  .swiper-pagination-bullet{
    margin:0 2px;
  }
}
</style>
