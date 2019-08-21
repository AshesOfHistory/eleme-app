<template>
  <div class="PageListContent">

    <div class="page-content-title">Honor Qualifications</div>
    <div class="flex-box" style="justify-content: flex-start;flex-wrap: wrap;">
      <div class="img-box" v-for="item in showArr" :key="item">
        <img class="img-mini"
             :src="require('../../../assets/about/2-' + (item + 1) + '.png')"
             @click="changeBig"
             alt="">
        <div class="center">{{item+1}}</div>
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
      this.getChunkArr(this.pageSize)
    },
    mounted() {
    },
    data() {
      return {
        currentPage: 1,
        pageTotal: 8,
        pageSize: 9,
        showArr: [],
        originArr:[],
      };
    },
    methods: {
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.showArr = this.originArr[currentPage-1]
      },
      handleSizeChange(size){
        this.getChunkArr(size)
      },
      changeBig(){

      },
      getChunkArr(chunkNum){
        let arr = [];
        for (let i = 0; i < this.pageTotal; i++) {
          arr.push(i);
        }
        this.originArr = arr.chunk(chunkNum);
        this.showArr = this.originArr[this.currentPage - 1];
      }
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
