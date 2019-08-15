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

    <div style="position:relative">
      <swiper :options="swiperOption">
        <swiper-slide><img class="s-img" src="../assets/4.jpg"></swiper-slide>
        <swiper-slide><img class="s-img" src="../assets/2.jpg"></swiper-slide>
        <swiper-slide><img class="s-img" src="../assets/3.jpg"></swiper-slide>
        <swiper-slide><img class="s-img" src="../assets/5.jpg"></swiper-slide>
        <swiper-slide><img class="s-img" src="../assets/6.jpg"></swiper-slide>
      </swiper>
      <div class="swiper-scrollbar"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
      <!--以下看需要添加-->
    </div>

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
      swiperOption: {
        speed: 500,
        autoplay: {
          delay: 2000, //自动切换的时间间隔，单位ms
          stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
          disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
          reverseDirection: false, //开启反向自动轮播。
          waitForTransition: false, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
          hideOnClick: true, //点击slide时显示/隐藏按钮
          disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
          hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',// fraction
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
          progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: true,  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          dynamicMainBullets: 2, //动态分页器的主指示点的数量
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
          draggable: true, //该参数设置为true时允许拖动滚动条。
          snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
          dragSize: 30, //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
        },
      },
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
