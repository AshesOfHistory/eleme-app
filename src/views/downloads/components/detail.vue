<template>
  <div class="detail">
    <div class="flex-box" style="justify-content: center;align-items: center;padding:10px;">
      <el-button size="small" @click="changePdfPage(0)">Preview</el-button>
      <div style="padding:0 10px;">{{currentPage}} / {{pageCount}}</div>
      <el-button size="small" @click="changePdfPage(1)">Next</el-button>
    </div>
    <pdf
      style="width:100%;"
      :src="src"
      :page="currentPage"
      @num-pages="pageCount=$event"
      @page-loaded="currentPage=$event"
      @loaded="loadPdfHandler"
    >
    </pdf>
    <!---->
  </div>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
    model: {},
    props: {
    },
    components: {pdf},
    created() {
      let fileUrl = this.$route.query.url ? this.$route.query.url : '';
      this.src = fileUrl;
      this.src = pdf.createLoadingTask(this.src)
    },
    mounted() {
    },
    data() {
      return {
        currentPage: 0,
        pageCount:0,
        src: '',
      };
    },
    methods: {
      changePdfPage (val) {
        if (val === 0 && this.currentPage > 1) {
          this.currentPage--
        }
        if (val === 1 && this.currentPage < this.pageCount) {
          this.currentPage++
        }
      },
      loadPdfHandler(){
        this.currentPage = 1
      }
    },
    computed: {
    },
    watch: {}
  };
</script>

<style lang="scss" scoped>
  .detail {
  }
</style>
