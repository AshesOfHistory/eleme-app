<template>
  <div class="detail">
    <div class="detail-container" v-html="content"></div>
  </div>
</template>

<script>
  import prolist from '@/data/t_products.js'
  import datalist from '@/data/solution_products.js'
  export default {
    model: {},
    props: {},
    components: {},
    mixins: [],
    created() {
      // type_id一定有，因为在routerName手动带入了
      let {type_id,product_id} = this.$route.query;
      let proList = datalist.data.solutionInfo.filter(item => item.type_id == type_id);
      let product_name = '';
      if(!product_id){
        product_name = proList[0].product_name
      } else {
        product_name = proList.filter(item => item.product_id == product_id)[0].product_name
      }
      let data = prolist.RECORDS.filter(item => item.ProName == product_name && item.IsShow == 1)[0]
      this.content = data.Content
    },
    mounted() {
    },
    data() {
      return {
        content: '',
      };
    },
    methods: {},
    computed: {},
    watch: {
      $route(){
        // type_id一定有，因为在routerName手动带入了
        let {type_id,product_id} = this.$route.query;
        let proList = datalist.data.solutionInfo.filter(item => item.type_id == type_id);
        let product_name = '';
        if(!product_id){
          product_name = proList[0].product_name
        } else {
          product_name = proList.filter(item => item.product_id == product_id)[0].product_name
        }
        let data = prolist.RECORDS.filter(item => item.ProName == product_name && item.IsShow == 1)[0]
        this.content = data.Content
      },
    },
    filters: {}
  };
</script>

<style lang="scss" scoped>

</style>
<style lang="scss">
  .detail {
    .detail-container table{
      width:100%;
    }
  }
</style>
