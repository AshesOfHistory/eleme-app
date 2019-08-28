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
      this.init()
    },
    mounted() {
    },
    data() {
      return {
        content: '',
      };
    },
    methods: {
      init(){
        // 渲染对应的产品content
        let {type_id_1,type_id_2} = this.$route.query;
        let proList = datalist.data.solution.filter(item => item.id == type_id_1);
        let router_id = '';
        if(!type_id_2){
          router_id = proList[0].children[0].id
        } else {
          router_id = proList[0].children.filter(item => item.id == type_id_2)[0].id
        }
        let data = prolist.RECORDS.find(item => item.TypeID == router_id && item.IsShow == 1)
        this.content = data.Content
      }
    },
    computed: {},
    watch: {
      $route(){
        this.init()
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
