<template>
  <div class="index general-index">
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
        <div style="font-size: 24px;text-align: left;padding-left:40px;height:40px;">Ideas for solution</div>
        <el-carousel height="240px" style="margin:10px 20px 0;">
          <el-carousel-item
            v-for="(item,index1) in 3"
            :key="index1"
            style="overflow: hidden">
            <img :src="require('../assets/1-' + (index1 + 1) + '.jpg')" alt="" style="width:100%;height:100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="width:50%;padding:0 10px 10px;">
        <div style="border-bottom:1px dashed #3c3c3c;display: flex;width:100%;padding-bottom:7px;">
          <div style="font-size:24px;">News</div>
          <div class="flex-end-wrapper">
            <div class="more">MORE>></div>
          </div>
        </div>

        <div class="news-wrapper">
          <div class="news-item" v-for="(item,index2) in newsList" :key="index2">
            <div class="news-title">{{item.title}}</div>
            <div class="flex-end-wrapper">
              <div>{{item.date}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {},
    components: {},
    data() {
      return {
        // imgArr: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
        newsList:[
          {
            title:'HONG KONG INTERNATIONAL LIGHTING FAIR',
            date:'2019-8-15'
          },
          {
            title: 'ELECTRIC & POWER INDONESIA 2019',
            date: '2019-08-15'
          },
          {
            title:'interlight + intelligent building Russia',
            date: '2019-08-15'
          },
          {
            title: 'Xiaoqiang Zhao Won 2018 European Product Design Award',
            date: '2019-06-15'
          },
          {
            title: 'ANKUOO and Google Home Smart Upgrade Hand in Hand',
            date: '2019-06-15'
          }
        ]
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /*#F38B08*/
  .s-img {
    width: 100%;
    height: 300px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
  }


  .more{
    font-size: 16px;
    color:#777;
    &:hover{
      color:orange;
    }
  }

  .news-wrapper{
    padding:20px 10px;
    height:calc(100% - 50px);
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .news-item{
      color:#464444;
      font-size: 12px;
      display: flex;
      .news-title:hover{
        color:orange;
      }
    }
  }

</style>
