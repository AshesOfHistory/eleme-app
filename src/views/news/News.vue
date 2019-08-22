<template>
  <div class="News">
    <img src="../../assets/news/news.jpg" alt="" style="width: 100%">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address :current-child-page="'News Center'"></page-address>
        <g-aside :aside-title="getPageTitle" :aside-items="'News Center'" @select="handleSelect"></g-aside>
      </div>
      <div style="width:75%;padding:0 25px 10px;">
        <page-address-right style="margin-bottom:10px;">
          <div class="flex-box" v-if="!isNewsDetail">
            <div class="address-nav-item"
                 :class="{active:typeId == item.typeId}"
                 v-for="(item,index) in navArr"
                 @click="changeNewsType(item)"
                 :key="index">
              {{item.title}}
            </div>
          </div>
          <div class="back-box" v-else @click="$router.go(-1);">
            <i class="el-icon-arrow-left"></i><span class="back">BACK</span>
          </div>
        </page-address-right>

        <router-view :key="Key"></router-view>

        <!--v-infinite-scroll="load"-->
        <div class="news-item-wrapper"
             v-if="!isNewsDetail"

             style="overflow: auto">
          <div class="news-item flex-box infinite-list-item"
               v-for="(item,index) in newsList"
               :key="index"
          >
            <!--index >= 3 && index <29 ? require('../../assets/news/'+(index+1)+'.jpg') : ''-->
            <img class="news-img" :src="require('../../assets/news/'+item.SmallPic)" alt="">
            <div style="margin-left: 50px;">
              <div class="news-title" @click="toDetail(item,index)">{{item.Title}}</div>
              <div class="news-content">{{item.Title}}...</div>
            </div>
            <div class="flex-end-wrapper">
              <div>{{item.ShowTime.split(' ')[0]}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import newsData from '@/data/t_news.js'
  export default {
    model: {},
    props: {},
    components: {},
    created() {
      this.newsList = newsData.RECORDS.filter(item => item.IsShow != 0)
    },
    mounted() {

    },
    data() {
      return {
        asideItemArr: ['Company Indroction','Honor Qualifications', 'Equipment Demonstration', 'The Businese Scope', 'LED Laboratory'],
        selectedIndex: 0,
        typeId: 0,
        newsList: [],
        navArr: [
          {title:'All',type: '',typeId:0},
          {title:'Fairs',type: 'Fairs',typeId:3},
          {title:'Events',type: 'Events',typeId:4},
          {title:'Products Release',type: 'Products Release',typeId:5},
          {title:'Other',type: 'Other',typeId:6},
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
        this.newsList.push({
          "id": "10",
          "Title": "Team building",
          "NoteTime": "20/9/2017 11:19:19",
          "Content": "",
          "UserName": "",
          "IsShow": "1",
          "IsCommend": "0",
          "OrderBy": "1",
          "NewType": "6",
          "Hits": "2171",
          "Language": "en",
          "Parent": "0",
          "SmallPic": "4.jpg",
          "WebTitle": "",
          "WebKey": "",
          "WebDesc": "",
          "ShowTime": "3/6/2013 00:00:00",
          "homecontent": "　2013.05.30 — 2013.06.01 at Fenghua, Ningbo..."
        })
      },
      changeNewsType(item){
        this.typeId = item.typeId;

        if (this.typeId != 0){
          this.newsList = newsData.RECORDS.filter(listItem => listItem.NewType == this.typeId && listItem.IsShow != 0)
        } else {
          this.newsList = newsData.RECORDS.filter(listItem => listItem.IsShow != 0)
        }
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
        if(this.$route.name == 'NewsDetail'){
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
      /*滚动区域限制高度*/
      /*height:500px;*/
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
