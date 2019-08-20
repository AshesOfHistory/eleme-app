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
          <page-content v-if="asideIndex == 0"></page-content>
          <page-list-content v-else></page-list-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageContent from './components/PageContent'
  import PageListContent from './components/PageListContent'
  export default {
    model: {},
    props: {},
    components: {PageContent,PageListContent},
    created() {
    },
    mounted() {
    },
    data() {
      return {
        asideItemArr: ['Company Indroction','Honor Qualifications', 'Equipment Demonstration', 'The Businese Scope', 'LED Laboratory'],
        // pageContentArr: [
        //   {
        //     title: ['HONESTY&CREDIBILITY','TEAMWORK','INNOVATION'],
        //     content: ''
        //   },
        // ],
        asideIndex: 1,
      };
    },
    methods: {
      handleSelect(index){
        this.asideIndex = index
      },
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
