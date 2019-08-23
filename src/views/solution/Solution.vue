<template>
  <div class="Solution">
    <img src="@/assets/solution/solution_banner.jpg" alt="" style="width:100%;">
    <el-button @click="activeAsidePath = 'Space Saver'">切换</el-button>
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address></page-address>
        <el-collapse
          v-model="activeAsidePath"
          @change="handleChange"
          accordion
          style="margin-top: 20px;">
          <el-collapse-item :title="item.name" :name="item.name" v-for="item in menuList" :key="item.id">
            <div v-for="child in item.children"
                 :key="child.id"
                 class="aside-item"
                 :class="{active: child.id == product_id}"
                 @click="toDetail(child)">
              {{ child.name }}
            </div>
          </el-collapse-item>
        </el-collapse>
        <!--<el-menu-->
          <!--:defaultActive="defaultActive"-->
          <!--class="el-menu-header"-->
          <!--mode="vertical"-->
          <!--@select="handleSelect"-->
          <!--text-color="#333"-->
          <!--background-color="#f4f4f4"-->
          <!--active-text-color="#F38B08"-->
        <!--&gt;-->
          <!--<el-submenu-->
            <!--:index="item.name"-->
            <!--mode="vertical"-->
            <!--v-for="item in menuList"-->
            <!--:key="item.id">-->
            <!--<template slot="title"><span class="" style="font-size: 12px">{{item.name}}</span></template>-->
            <!--<el-menu-item-->
              <!--:index="child.name"-->
              <!--v-for="child in item.children"-->
              <!--:key="child.id"><span style="font-size: 12px">{{child.name}}</span></el-menu-item>-->
          <!--</el-submenu>-->
        <!--</el-menu>-->
      </div>
      <div style="width:75%;padding:0 25px 10px">
        <page-address-right style="margin-bottom:10px;"></page-address-right>
        <router-view :key="Key"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import datalist from '@/data/solution_products.js'
  export default {
    model: {},
    props: {},
    components: {},
    mixins:[],
    created() {
      this.Key = this.$route.path;
      this.pageTitle = this.$route.name;
      this.menuList = datalist.data.solution
    },
    mounted() {
      // this.$store.commit('addChildRouterProductInfo',datalist.data.productInfo.find(item => item.product_id == 150))
    },
    data() {
      return {
        selectedIndex: 0,
        menuList:[],
        activeAsidePath: 'Space Saver',
        product_id: '',
        Key: '',
        pageTitle: ''
      };
    },
    methods: {
      handleSelect(index,indexPath,item){

      },
      handleChange(activeAsidePath){
        if(activeAsidePath){
          this.product_id = this.menuList.find(item => item.name == activeAsidePath).children[0].id;
          this.$store.commit('setActiveAsidePath',activeAsidePath)
        }
      },
      toDetail(item){
        if(item && item.parentId) {
          let path = this.$route.path + '?type_id=' + item.parentId + '&product_id='+item.id
          this.$router.push(path);
          this.$store.commit('setFullPath',path,item.parentId,item.id);
          this.product_id = item.id;
        }
      }
    },
    computed: {
    },
    watch: {
      $route(){
        this.Key = this.$route.path;
        this.pageTitle = this.$route.name;
      },
      $store(){
        // this.activeAsidePath = this.$store.getters.getActiveAsidePath
      }
    }
  };
</script>

<style lang="scss" scoped>
  .Solution {
    .aside-item{
      padding:5px 20px;
      font-size: 12px;
      &:hover{
        color:#ff6600;
        background: #f4f4f4;
      }
      &.active{
        color:#ff6600;
        background: #f4f4f4;
      }
    }
  }
</style>
<style lang="scss">
  /*.Solution{*/
    /*.el-menu-item, .el-submenu__title{*/
      /*height:30px!important;*/
      /*line-height: 30px!important;*/
    /*}*/
    /*.el-submenu__title{*/
      /*padding:0!important;*/
      /*&:hover{*/
        /*&>span{*/
          /*color:#ff6600;*/
        /*}*/
      /*}*/
    /*}*/
    /*.el-menu-item{*/
      /*padding:0 20px!important;*/
      /*&:hover{*/
        /*&>span{*/
          /*color:#ff6600;*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
</style>
