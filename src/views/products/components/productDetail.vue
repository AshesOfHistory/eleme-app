<template>
  <div class="productDetail">
    <img src="@/assets/products/b_pro.jpg" alt="" style="width:100%;">
    <page-address-right style="margin-bottom:20px;margin-top: 25px;">
      <div class="back-box" @click="$router.go(-1);">
        <i class="el-icon-arrow-left"></i><span class="back">BACK</span>
      </div>
    </page-address-right>
    <div class="product-content" v-html="product.Content"></div>
  </div>
</template>

<script>
  import product from '@/data/t_products.js'
  export default {
    model: {},
    props: {
    },
    components: {},
    mixins: [],
    created() {
      let {product_id} = this.$route.query;
      if(product_id) {
        this.product = product.RECORDS.find(item => item.id == product_id)
      }
    },
    mounted() {
    },
    data() {
      return {
        product: {}
      };
    },
    methods: {},
    computed: {
    },
    watch: {
      $route(val){
        let {product_id} = this.$route.query;
        if(product_id) {
          this.product = product.RECORDS.find(item => item.id == product_id)
        }
      },
    },
    filters: {}
  };
</script>

<style lang="scss">
  .productDetail {
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
    .product-content table{
      margin:0 auto;
    }
    a{
      text-decoration: none;
      color:#333!important;
      &:hover{
        color:#ff6600!important;
      }
    }
  }
</style>
