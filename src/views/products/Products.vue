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
          {{activeAsidePath}}
          <el-collapse-item
            :title="item.name"
            :name="item.name"
            class="list-item"
            :class="{active:item.is_active}"
            v-for="item in menuList"
            :key="item.id">
            <el-collapse
              v-model="item.child_path"
              @change="handleChildChange"
              accordion
            >
              <el-collapse-item
                :title="child.name"
                :name="child.name"
                v-for="child in item.children"
                class="child-item"
                :class="{active:child.is_active}"
                :key="item.id+'-'+child.id">
                <div v-if="child.children && child.children.length > 0">
                  <div v-for="grandson in child.children"
                       class="aside-item"
                       :class="{active:grandson.is_active}"
                       @click="toDetail(grandson,item,child)"
                       :key="item.id+'-'+child.id+'-'+grandson.id" >
                    {{grandson.name}}
                  </div>
                </div>
                <div v-else class="aside-item" @click="toSmartHome(item,child)">{{child.name}}</div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div style="width:75%;padding:0 25px 10px">
        <page-address-right style="margin-bottom:10px;"></page-address-right>
        <router-view :key="Key"></router-view>
      </div>
    </div>

    <div v-else>
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

      this.deepChangeAttr(this.menuList)
      if (this.$route.query) {
        let {type_id_1,type_id_2,type_id_3} = this.$route.query;
        let level1 = this.menuList.find(item => item.id == type_id_1);
        level1.is_active = true;
        let level2 = '';
        let level3 = '';
        this.activeAsidePath = level1.name;
        if (type_id_2) {
          level2 = level1.children.find(child => child.id == type_id_2);
          level1.child_path = level2.name;
          //  初始路由状态
          level2.is_active = true
          if (type_id_3) {
            level3 = level2.children.find(grandChild => grandChild.id == type_id_3);
            level3.is_active = true
          }
        } else {
          level1.child_path = level1.children[0].name;
          level2 = level1.children[0];
          level3 = level2.children[0];
          level2.is_active = true;
          level3.is_active = true;
        }
      }
      if (this.pageTitle == 'productDetail') {
        this.isProductDetail = true
      } else {
        this.isProductDetail = false
      }
    },
    mounted() {
    },
    data() {
      return {
        Key:'',
        pageTitle: '',
        menuList: [],
        activeAsidePath:'Lumitek',
        isProductDetail: false,
        type_id_arr: []
      };
    },
    methods: {
      handleChange(activeAsidePath){
        // let level1 = this.menuList.find(item => item.name == this.$route.query.type_id_1);
        // level1.is_active = true
      },
      handleChildChange(childAsidePath){
        this.childAsidePath = childAsidePath;
      },
      deepChangeAttr(obj){
        for (let i in obj) {
          if(typeof obj[i] == 'object'){
            this.deepChangeAttr(obj[i])
          } else {
            obj.is_active = false
          }
        }
      },
      toDetail(item,grandParentItem,parentItem){
        if(item && item.parent_id) {
          let path = this.$route.path + '?type_id_1=' + grandParentItem.id + '&type_id_2=' + parentItem.id + '&type_id_3=' + item.id;
          this.$router.push(path);
          this.$store.commit('setFullPath',path,item.parent_id,item.id);
          this.deepChangeAttr(this.menuList);
          item.is_active = true;
          grandParentItem.is_active = true;
          parentItem.is_active = true
        }
      },
      toSmartHome(grandParentItem,parentItem){
        let path = this.$route.path + '?type_id_1=' + grandParentItem.id + '&type_id_2=' + parentItem.id;
        this.$router.push(path)
      }
    },
    computed: {},
    watch: {
      $route(){
        this.Key = this.$route.path;
        this.pageTitle = this.$route.name;

        this.deepChangeAttr(this.menuList)
        if (this.$route.query) {
          let {type_id_1,type_id_2,type_id_3} = this.$route.query
          let level1 = this.menuList.find(item => item.id == type_id_1);
          level1.is_active = true;
          let level2 = '';
          let level3 = '';
          this.activeAsidePath = level1.name;
          if (type_id_2) {
            level2 = level1.children.find(child => child.id == type_id_2);
            level1.child_path = level2.name;
            //  初始路由状态
            level2.is_active = true
            if (type_id_3) {
              level3 = level2.children.find(grandChild => grandChild.id == type_id_3);
              level3.is_active = true
            }
          } else {
            level1.child_path = level1.children[0].name;
            level2 = level1.children[0];
            level3 = level2.children[0];
            level2.is_active = true;
            level3.is_active = true;
          }
        }
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
  .Products .list-item.active>div>.el-collapse-item__header{
    color: #ff6600!important;
  }
  .Products .child-item.active>div>.el-collapse-item__header{
    color: #ff6600!important;
  }
  .Products .child-item .el-collapse-item__header{
    background: #c2c2c2!important;
  }
  .Products .el-collapse-item__content{
    padding-bottom: 0;
  }
</style>
