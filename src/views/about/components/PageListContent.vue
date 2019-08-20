<template>
  <div class="PageListContent">

    <div class="page-content-title">Honor Qualifications</div>
    <div class="flex-box" style="justify-content: flex-start;flex-wrap: wrap;">
      <div class="img-box" v-for="(item,index) in showArr" :key="index">
        <img class="img-mini"
             :src="require('../../../assets/about/2-' + (index + 1) + '.png')"
             @click="changeBig"
             alt="">
        <div class="center">{{index+1}}</div>
      </div>
    </div>
    <el-pagination
      @current-change="handleCurrentChange"
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
    },
    mounted() {
    },
    data() {
      return {
        currentPage: 1,
        pageTotal: 8,
        pageSize: 9,
        imgLength: 8,
        showArr: [0,1,2,3,4,5,6,7],
      };
    },
    methods: {
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      changeBig(){

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
