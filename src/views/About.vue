<template>
  <div class="About">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address></page-address>
        <g-aside :aside-title="getPageTitle" :aside-items="asideItemArr" @select="handleSelect"></g-aside>
      </div>
      <div style="width:75%;padding:0 10px 10px;">
        <page-address-right></page-address-right>
        <div class="page-content">
          <div class="page-content-title" style="">Company introduction</div>
          <div class="flex-box" style="justify-content: space-around">
            <div class="flex-item">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {},
    components: {},
    created() {
    },
    mounted() {
    },
    data() {
      return {
        asideItemArr: ['Company Indroction','Honor Qualifications', 'Equipment Demonstration', 'The Businese Scope', 'LED Laboratory'],
        selectedIndex: 0
      };
    },
    methods: {
      handleSelect(index){
        this.selectedIndex = index
      }
    },
    computed: {
      getPageTitle(){
        if (this.$route.name == 'News') {
          return 'News Center'
        }
        return this.$route.name
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
          color:orange;
        }
        &.active{
          color:orange;
        }
      }
    }

    .page-content{
      .page-content-title{
        font-size: 24px;
        font-weight: 700;
      }
    }

    .news-header-wrapper{
      border-bottom:1px dashed #3c3c3c;
      display: flex;
      width:100%;
      padding-bottom:7px;
      .news-header-title{
        font-size: 24px;
      }
      .more{
        font-size: 16px;
        color:#777;
        &:hover{
          color:orange;
        }
      }
    }
  }
</style>
