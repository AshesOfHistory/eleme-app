<template>
  <div class="Products">
    <img src="@/assets/products/b_pro.jpg" alt="" style="width:100%;">
    <div class="flex-box" style="margin-top:25px" v-if="!isProductDetail">
      <div style="width:25%">
        <el-collapse
          v-model="activeAsidePath"
          @change="handleChange"
          accordion
          style="margin-top: 20px;">
          <el-collapse-item
            :title="item.name"
            :name="item.name"
            class="list-item"
            v-for="item in menuList"
            :key="item.id">
            <el-collapse
              v-model="childAsidePath"
              @change="handleChildChange"
              accordion
            >
              <el-collapse-item
                :title="child.name"
                v-for="child in item.children"
                class="child-item"
                :key="item.id+'-'+child.id">
                <div v-if="child.children && child.children.length > 0">
                  <div v-for="grandson in child.children"
                       class="aside-item"
                       @click="toDetail(grandson,item)"
                       :key="item.id+'-'+child.id+'-'+grandson.id" >
                    {{grandson.name}}
                  </div>
                </div>
                <div v-else class="aside-item">{{child.name}}</div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div style="width:75%;padding:0 25px 10px">
        <page-address-right style="margin-bottom:10px;"></page-address-right>
        <router-view :key="Key" :product="handleProduct"></router-view>
      </div>
    </div>

    <div v-else>
      <page-address-right style="margin-bottom:10px;"></page-address-right>
      <product-detail :product-info="product"></product-detail>
    </div>
  </div>
</template>

<script>
  import protype from '@/data/t_protype.js'
  import datalist from '@/data/solution_products.js'
  import ProductDetail from './components/productDetail'
  export default {
    model: {},
    props: {},
    components: {ProductDetail},
    mixins: [],
    created() {
      this.Key = this.$route.path;
      this.pageTitle = this.$route.name;

      this.menuList = datalist.data.products;
      this.type_id_3 = this.menuList.find(item => item.name == this.activeAsidePath).children[0].id;
    },
    mounted() {
    },
    data() {
      return {
        Key:'',
        pageTitle: '',
        menuList: [],
        type_id_3: '',
        activeAsidePath:'Lumitek',
        childAsidePath: '-Switch flush type',
        isProductDetail: false,
        product: {}
      };
    },
    methods: {
      handleChange(activeAsidePath){
        if(activeAsidePath){
          // this.type_id_3 = this.menuList.find(item => item.name == activeAsidePath).children[0].id;
          console.log(this.type_id_3,activeAsidePath)
        }
      },
      handleChildChange(childAsidePath){
        console.log(childAsidePath,'childAsidePath')
      },
      handleProduct(product){
        console.log(product)
        this.product = product
      },
      toDetail(item,parentItem){
        if(item && item.parent_id) {
          let path = this.$route.path + '?type_id_1=' + parentItem.id + '&type_id_2=' + item.parent_id + '&type_id_3='+item.id
          this.$router.push(path);
          this.$store.commit('setFullPath',path,item.parent_id,item.id);
          this.type_id_3 = item.id;
        }
      }
    },
    computed: {},
    watch: {
      $route(){
        this.Key = this.$route.path;
        this.pageTitle = this.$route.name;
        if (this.pageTitle == 'productDetail') {
          this.isProductDetail = true
        } else {
          this.isProductDetail = false
        }
      },
    },
    filters: {}
  };
</script>

<style lang="scss" scoped>
  .Products {
    .aside-item{
      padding:5px 20px;
      font-size: 12px;
      background: rgba(204,204,204,.5);
      &:hover{
        color:#ff6600;
        background: rgba(204,204,204,1);
      }
      &.active{
        color:#ff6600;
        background: rgba(204,204,204,1);
      }
    }

    .el-collapse-item__header.is-active{
      background: #ccc!important;
    }
  }
</style>
<style lang="scss">
  .Products .el-collapse-item__header{
    padding-left:10px;
  }
  .Products .list-item .el-collapse-item__header{
    background: #888!important;
  }
  .Products .child-item .el-collapse-item__header{
    background: #c2c2c2!important;
  }
</style>
