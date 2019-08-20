<template>
  <div class="index">
    <el-carousel height="300px">
      <el-carousel-item
        v-for="(item,index) in 8"
        :key="index"
        style="overflow: hidden;"
        >
        <img :src="require('../assets/'+(index+1)+'.jpg')" alt="" style="width:100%;height:100%;">
      </el-carousel-item>
    </el-carousel>

    <div class="flex-box" style="margin-top:25px;">
      <div style="width:50%;">
        <div style="font-size: 24px;text-align: left;padding-left:40px;">Ideas for solution</div>
        <!--<el-carousel height="300px" style="margin:10px 20px 0;">-->
          <!--<el-carousel-item v-for="item in 4" :key="item">-->
            <!--<h3 class="small">{{ item }}</h3>-->
          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
      </div>
      <div style="display: flex;width:50%;">
        <div style="font-size:24px;border-bottom:1px dashed #3c3c3c;height:1em;display: flex;width:100%;margin-left:20px;padding-bottom:4px;">
          News
          <span style="font-size: 16px;color:#777;display: flex;flex-grow: 1;justify-content: flex-end;align-items: center;">more</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods:{

  },
  components:{},
  data(){
    return {
      // imgArr: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /*#F38B08*/
  .s-img{
    width:100%;
    height:300px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
  }

  /*.el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #ccc;*/
  /*}*/
</style>
