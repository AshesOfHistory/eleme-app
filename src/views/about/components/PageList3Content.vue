<template>
  <div class="PageListContent">

    <div class="page-content-title">LED Laboratory</div>
    <div class="flex-box" style="justify-content: flex-start;flex-wrap: wrap;">
      <div class="img-box" v-for="item in showArr" :key="item.index">
        <img class="img-mini"
             :src="require('@/assets/about/page5/' + item.imgUrl)"
             @click="changeBig"
             alt="">
        <div class="center">{{item.index+1}}</div>
      </div>
    </div>
    <el-pagination
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page="currentPage"
      :page-sizes="[3, 6, 9, 18]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageTotal">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {},
    components: {},
    created() {
      const files = require.context('@/assets/about/page5', false, /.(png|jpg|jpeg)$/).keys()
      this.originArr = files.map((item,index) => {
        return {imgUrl: item.split('./')[1],index: index}
      })
      this.pageTotal = this.originArr.length;
      this.getChunkArr(this.pageSize)
    },
    mounted() {
    },
    data() {
      return {
        currentPage: 1,
        pageTotal: 12,
        pageSize: 9,
        showArr: [],// 用于展示的地址数组
        chunkedArr: [],// 切割后的地址数组
        originArr: [],// 图片地址原始数组
      };
    },
    methods: {
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.showArr = this.chunkedArr[currentPage-1]
      },
      handleSizeChange(size){
        this.getChunkArr(size)
      },
      changeBig(){

      },
      getChunkArr(chunkNum){
        this.chunkedArr = this.originArr.chunk(chunkNum);
        this.showArr = this.chunkedArr[this.currentPage - 1];
      },
    },
    computed: {
    },
  };
</script>

<style lang="scss" scoped>
  .PageListContent {
    .page-content-title{
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 700;
    }

    .img-box{
      margin-bottom: 20px;
      margin-right: 20px;
      .img-mini{
        cursor: pointer;
        width:200px;
        height:145px;
      }
    }
  }
</style>
<style lang="scss">
  .el-pager li.active{
    color:#ff6600!important;
  }
  .el-pager li:hover{
    color:#ff6600!important;
  }
</style>
