<template>
  <div class="index">
    <header>
      <div class="flex-box">
        <img src="../assets/logo.png" alt="" class="logo">
        <div class="header-right">
          <div class="">
            <el-input placeholder="Please enter the product type" v-model="search" prefix-icon="el-icon-search"></el-input>
            <g-menu></g-menu>
          </div>
        </div>
      </div>
    </header>

    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <el-button @click="$router.push('/about')">点击跳转到about页面</el-button>
  </div>
</template>

<script>
  import GMenu from './GMenu'
export default {
  methods:{

  },
  components:{GMenu},
  data(){
    return {
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

  .header-right{
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
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
