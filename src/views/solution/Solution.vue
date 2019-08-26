<template>
  <div class="Solution">
    <img src="@/assets/solution/solution_banner.jpg" alt="" style="width:100%;">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address :current-child-page="currentChildPage"></page-address>
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
      this.product_id = this.menuList.find(item => item.name == this.activeAsidePath).children[0].id;
    },
    mounted() {
    },
    data() {
      return {
        selectedIndex: 0,
        menuList:[],
        activeAsidePath: 'Space Saver',
        currentChildPage:'30241L',
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
          console.log(this.product_id,activeAsidePath)
        }
      },
      toDetail(item){
        if(item && item.parent_id) {
          let path = this.$route.path + '?type_id=' + item.parent_id + '&product_id='+item.id
          this.$router.push(path);
          this.$store.commit('setFullPath',path,item.parent_id,item.id);
          this.product_id = item.id;
          this.currentChildPage = item.name
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
