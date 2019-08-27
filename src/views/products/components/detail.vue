<template>
  <div class="detail">
    <div class="detail-container"
         @click="toDetail(item)"
         v-for="item in pro_list"
         :key="item.id">
      <img :src="item.imgUrl" alt="" style="width:220px;height:135px;">
      <div style="font-weight: bold;margin-top: 10px">{{item.ProName}}</div>
    </div>
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
      let {type_id_1,type_id_2,type_id_3} = this.$route.query;
      let proList = datalist.data.products.filter(item => item.id == type_id_1);
      let router_id = '';
      if(!type_id_2 || !type_id_3){
        router_id = proList[0].children[0].children[0].id
      } else {
        let level_1 = proList.filter(item => item.id == type_id_1)[0];
        let level_2 = level_1.children.filter(item1 => item1.id == type_id_2)[0];
        let level_3 = level_2.children.filter(item2 => item2.id == type_id_3)[0];
        router_id = level_3.id
      }
      let data = prolist.RECORDS.filter(item => item.TypeID == router_id && item.IsShow == 1)
      data.forEach(item => {
        item.imgUrl = require('../../../../public/productImgs/'+item.SmallPic);
        let dataArr = item.NoteTime.split('/')
        let dataArr2 = dataArr[2].split(' ')
        let dd = dataArr[0];
        let mm = dataArr[1];
        let yyyy = dataArr2[0];
        let datastamp = new Date(yyyy + '/' + mm + '/' + dd + ' ' + dataArr2[1]).getTime()
        item.timestamp = datastamp
      })
      this.pro_list = data.sort((item1,item2) => {
        return item2.timestamp - item1.timestamp
      })
    },
    mounted() {
    },
    data() {
      return {
        pro_list:[],
        product:{}
      };
    },
    methods: {
      toDetail(product){
        // console.log(type_id_1,type_id_2,type_id_3,product.id)
        console.log(product)
        this.$emit('product',product)
      }
    },
    computed: {},
    watch: {
      $route(){
        // type_id一定有，因为在routerName手动带入了
        let {type_id_1,type_id_2,type_id_3} = this.$route.query;
        let proList = datalist.data.products.filter(item => item.id == type_id_1);
        let router_id = '';
        if(!type_id_2 || !type_id_3){
          router_id = proList[0].children[0].children[0].id
        } else {
          let level_1 = proList.filter(item => item.id == type_id_1)[0];
          let level_2 = level_1.children.filter(item1 => item1.id == type_id_2)[0];
          let level_3 = level_2.children.filter(item2 => item2.id == type_id_3)[0];
          router_id = level_3.id
        }
        let data = prolist.RECORDS.filter(item => item.TypeID == router_id && item.IsShow == 1)
        data.forEach(item => {
          item.imgUrl = require('../../../../public/productImgs/'+item.SmallPic);
          let dataArr = item.NoteTime.split('/')
          let dataArr2 = dataArr[2].split(' ')
          let dd = dataArr[0];
          let mm = dataArr[1];
          let yyyy = dataArr2[0];
          let datastamp = new Date(yyyy + '/' + mm + '/' + dd + ' ' + dataArr2[1]).getTime()
          item.timestamp = datastamp
        })
        this.pro_list = data.sort((item1,item2) => {
          return item2.timestamp - item1.timestamp
        })
      },
    },
    filters: {}
  };
</script>

<style lang="scss" scoped>
  .detail {
    display: flex;
    flex-wrap: wrap;
    .detail-container{
      margin-right: 20px;
      margin-top: 20px;
      justify-content: center;
    }
  }
</style>
