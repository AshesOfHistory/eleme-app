<template>
  <div class="News">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address></page-address>
        <g-aside :aside-title="getPageTitle" :aside-items="'News Center'" @select="handleSelect"></g-aside>
      </div>
      <div style="width:75%;padding:0 10px 10px;">
        <page-address-right></page-address-right>
        <!--<div class="news-header-wrapper">-->
          <!--<div class="news-header-title">News</div>-->
          <!--<div class="flex-end-wrapper">-->
            <!--<div class="more">MORE>></div>-->
          <!--</div>-->
        <!--</div>-->
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
  .News {
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
          color:#ff6600;
        }
      }
    }
  }
</style>
