<template>
  <div class="News">
    <img src="../../assets/news/news.jpg" alt="" style="width: 100%">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address></page-address>
        <g-aside :aside-title="getPageTitle" :aside-items="'News Center'" @select="handleSelect"></g-aside>
      </div>
      <div style="width:75%;padding:0 25px 10px;">
        <page-address-right style="margin-bottom:10px;">
          <div class="flex-box" v-if="!isNewsDetail">
            <div class="address-nav-item"
                 :class="{active:navIndex == index}"
                 v-for="(item,index) in navArr"
                 @click="navIndex = index"
                 :key="index">
              {{item.title}}
            </div>
          </div>
          <div class="back-box" v-else @click="$router.go(-1);">
            <i class="el-icon-arrow-left"></i><span class="back">BACK</span>
          </div>
        </page-address-right>

        <router-view :key="Key"></router-view>

        <div class="news-item-wrapper"
             v-if="!isNewsDetail"
             v-infinite-scroll="load"
             style="overflow: auto">
          <div class="news-item flex-box infinite-list-item"
               v-for="(item,index) in newsList"
               :key="index"
          >
            <img class="news-img" :src="index >= 3 && index <29 ? require('../../assets/news/'+(index+1)+'.jpg') : ''" alt="">
            <div style="margin-left: 50px;">
              <div class="news-title" @click="toDetail(item,index)">{{item.title}}</div>
              <div class="news-content">{{item.content}}</div>
            </div>
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
    model: {},
    props: {},
    components: {},
    created() {
    },
    mounted() {
    //  ../assets/news/1.jpg
    },
    data() {
      return {
        asideItemArr: ['Company Indroction','Honor Qualifications', 'Equipment Demonstration', 'The Businese Scope', 'LED Laboratory'],
        selectedIndex: 0,
        navIndex: 0,
        newsList: [
          {imgUrl: '',title: 'HONG KONG INTERNATIONAL LIGHTING FAIR',content: 'HONG KONG INTERNATIONAL LIGHTING FAIR...',date: '2019-08-15',id:1,typeId:1},
          {imgUrl: '',title: 'ELECTRIC & POWER INDONESIA 2019',content: 'ELECTRIC & POWER INDONESIA 2019...',date: '2019-08-15',id:2,typeId:2},
          {imgUrl: '',title: 'interlight + intelligent building Russia',content: 'interlight + intelligent building Russia...',date: '2019-08-15',id:3,typeId:1},
          {imgUrl: '../assets/news/1.jpg',title: '111',content: '111...',date: '2019-07-15',id:4,typeId:4},
          {imgUrl: '../assets/news/1.jpg',title: '111',content: '111...',date: '2019-06-15',id:5,typeId:1},
          {imgUrl: '../assets/news/1.jpg',title: '111',content: '111...',date: '2019-05-15',id:6,typeId:3},
          {imgUrl: '../assets/news/1.jpg',title: '111',content: '111...',date: '2019-04-15',id:7,typeId:2},
          {imgUrl: '../assets/news/1.jpg',title: '111',content: '111...',date: '2019-03-15',id:8,typeId:1},
          {imgUrl: '../assets/news/1.jpg',title: '111',content: '111...',date: '2019-02-15',id:9,typeId:1},
        ],
        navArr: [
          {title:'All',type: '',typeId:0},
          {title:'Fairs',type: 'Fairs',typeId:1},
          {title:'Events',type: 'Events',typeId:2},
          {title:'Products Release',type: 'Products Release',typeId:3},
          {title:'Other',type: 'Other',typeId:4},
        ],
        newsDetail:{},
      };
    },
    methods: {
      handleSelect(index){
        this.selectedIndex = index
      },
      toDetail(item,index){
        window.localStorage.setItem('NewsDetail',JSON.stringify(item));
        this.$router.push({path:'/News/detail?id='+item.id});
      },
      load(){
        this.newsList.push({imgUrl: '../assets/news/1.jpg',title: '111',content: '111...',date: '2019-01-15',id:10,typeId:1})
      }
    },
    computed: {
      getPageTitle(){
        if (this.$route.name == 'News') {
          return 'News Center'
        }
        return this.$route.name
      },
      Key(){
        return this.$route.path
      },
      isNewsDetail(){
        if(this.$route.name == 'detail'){
          return true
        }
        return false
      }
    },
    filters:{

    }
  };
</script>

<style lang="scss" scoped>
  .News {
    .address-nav-item{
      color:#464444;
      padding:0 5px;
      margin:0 10px;
      &.active{
        background: #CBCCC7;
      }
      &:hover{
        color:#ff6600;
      }
    }

    .back-box{
      font-weight: bold;
      .el-icon-arrow-left{
        font-weight: bold;
      }
      &:hover{
        .back{
          color:#ff6600;
        }
        .el-icon-arrow-left{
          color:#ff6600;
        }
      }
    }

    .news-item-wrapper{
      height:500px;
      .news-item{
        margin-top: 10px;
        align-items: center;
      }
      .news-title:hover{
        color:#ff6600;
      }
      .news-img{
        background: #f2f2f2;
        width:110px;
        height:70px;
      }
    }
  }
</style>
