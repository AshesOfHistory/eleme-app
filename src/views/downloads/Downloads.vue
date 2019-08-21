<template>
  <div class="Contact">
    <img src="@/assets/downloads/down.jpg" alt="" style="width: 100%;">
    <div class="flex-box" style="margin-top: 25px;">
      <div style="width:25%;">
        <page-address :current-child-page="'LUMITEK'"></page-address>
        <g-aside aside-title="Downloads" ></g-aside>
      </div>
      <div style="width:75%;padding:0 25px 10px;">
        <page-address-right></page-address-right>
        <div class="page-content">
          <img src="../../assets/downloads/down_ad.jpg" alt="" style="width:100%;margin-top: 20px;">
          <div class="page-content-title">Product resources download center</div>
          <div class="downloads-box">
            <div class="downloads-item flex-box" style="align-items: center;margin-top: 20px;" v-for="item in downloadsArr" :key="item.index">
              <img :src="require('@/assets/downloads/'+item.imgUrl)" alt="" style="width:87px;height:96px;">
              <div style="margin-left: 20px">{{item.title}}</div>
              <div class="flex-end-wrapper" @click="downloadFile">
                <img src="@/assets/downloads/pdf.jpg" alt="">
                <span class="download-txt">download</span>
              </div>
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
      const files = require.context('@/assets/downloads', false, /\d+.(png|jpg|jpeg)$/).keys()
      this.downloadsArr = files.map((item,index) => {
        return {imgUrl: item.split('./')[1],index: index,title:this.titleArr[index]}
      })
    },
    mounted() {
    },
    data() {
      return {
        downloadsArr: [],
        titleArr:['2019-2020 Lumitek new LED Catalogue','2019 Electrical Catalogue','Lumitek Smart Product 2018-2019','2019 IT Electrical Catalogue'],
      };
    },
    methods: {
      downloadFile(){
        this.$message('正在下载中，请稍侯...')
        window.open('/DownloadsDetail','_blank')

      }
    },
    computed: {
      Key(){
        return this.$route.path
      }
    },
    watch: {}
  };
</script>

<style lang="scss" scoped>
  .Contact {

    .page-content-title{
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: 700;
      font-family: "Times New Roman";
    }
    .download-txt{
      margin-left: 10px;
      &:hover{
        color:#ff6600;
      }
    }
  }
</style>
