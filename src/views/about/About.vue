<template>
  <div class="About">
    <img src="../../assets/about/banner1.jpg" alt="" width="100%;">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address></page-address>
        <g-aside :aside-title="getPageTitle" :aside-items="asideItemArr" @select="handleSelect"></g-aside>
      </div>
      <div style="width:75%;padding:0 25px 10px;">
        <page-address-right></page-address-right>
        <div class="page-content">
          <g-content :aside-item="asideItem"></g-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GContent from './components/Content'
  export default {
    model: {},
    props: {},
    components: {GContent},
    created() {
    },
    mounted() {
    },
    data() {
      return {
        asideItemArr: [
          {title: 'Company Indroction',pageType:'page',id:1},
          {title: 'Honor Qualifications',pageType:'list1',id:2,},
          {title: 'Equipment Demonstration',pageType:'list2',id:3},
          {title: 'The Businese Scope',pageType:'image',id:4},
          {title: 'LED Laboratory',pageType:'list3',id:5},
        ],
        asideIndex: 1,
        asideItem: {},
      };
    },
    methods: {
      handleSelect(index, item){
        this.asideIndex = index
        this.asideItem = item
      },
    },
    computed: {
      getPageTitle(){
        if (this.$route.name == 'News') {
          return 'News Center'
        }
        return this.$route.name
      },
      Key(){
        return this.$route.path
      }
    },
  };
</script>

<style lang="scss" scoped>
  .About {
    .aside-wrapper{
      margin-top:20px;
      margin-bottom:10px;
      overflow: hidden;
      .aside-submenu-title{
        font-size: 14px;
        margin-bottom: 20px;
        margin-top: 20px;
      }
      .aside-submenu-item{
        background: #ccc;
        margin-bottom: 5px;
        padding:3px 15px;
        &:hover{
          color:#ff6600;
        }
        &.active{
          color:#ff6600;
        }
      }
    }

    .page-content{

    }
  }
</style>
