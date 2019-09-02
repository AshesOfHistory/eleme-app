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
          <el-collapse-item
            :title="item.name"
            :name="item.name"
            class="list-item"
            :class="{active:item.is_active}"
            v-for="item in menuList"
            :key="item.id">
            <div v-for="child in item.children"
                 :key="child.id"
                 class="aside-item"
                 :class="{active: child.is_active}"
                 @click="toDetail(child,item)">
              {{ child.name }}
            </div>
          </el-collapse-item>
        </el-collapse>
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
      this.menuList = datalist.data.solution;
      this.init()
    },
    mounted() {
    },
    data() {
      return {
        selectedIndex: 0,
        menuList:[],
        activeAsidePath: 'Space Saver',
        currentChildPage:'30241L',
        Key: '',
        pageTitle: ''
      };
    },
    methods: {
      init(){
        this.Key = this.$route.path;
        this.pageTitle = this.$route.name;

        this.deepChangeAttr(this.menuList, (listObj) => listObj.is_active = false);
        if (this.$route.query) {
          let {type_id_1,type_id_2} = this.$route.query;
          let level1 = this.menuList.find(item => item.id == type_id_1);
          level1.is_active = true;
          let level2 = '';
          this.activeAsidePath = level1.name;
          if (type_id_2) {
            level2 = level1.children.find(child => child.id == type_id_2);
            level1.child_path = level2.name;
            level2.is_active = true
          } else {
            level1.child_path = level1.children[0].name;
            level2 = level1.children[0];
            level2.is_active = true;
          }
        }
      },
      deepChangeAttr(obj,fn){
        for (let i in obj) {
          if(typeof obj[i] == 'object'){
            this.deepChangeAttr(obj[i],fn)
          } else {
            fn(obj)
          }
        }
      },
      handleSelect(index,indexPath,item){

      },
      handleChange(activeAsidePath){
        this.activeAsidePath = activeAsidePath
        // if(activeAsidePath){
        //   this.$store.commit('setActiveAsidePath',activeAsidePath)
        // }
      },
      toDetail(item,parentItem){
        if(item && item.parent_id) {
          let pathPrefix = this.$route.matched[0].path + '/' + this.activeAsidePath;
          let path = pathPrefix + '?type_id_1=' + parentItem.id + '&type_id_2='+item.id;
          parentItem.is_active = true;
          item.is_active = true;
          this.$router.push(path);
          this.$store.commit('setFullPath',path,item.parent_id,item.id);
          this.deepChangeAttr(this.menuList, (listObj) => listObj.is_active = false);
          this.currentChildPage = item.name
        }
      }
    },
    computed: {
    },
    watch: {
      $route(){
        this.init()
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
  .Solution .el-collapse-item__header{
    padding-left:10px;
  }
  .Solution .el-collapse-item__header.is-active{
    color: #ff6600!important;
    background: #c2c2c2!important;
  }
</style>
