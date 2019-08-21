<template>
  <div class="Content">
    <page-content v-if="pageType == 'page'"></page-content>
    <page-list-content v-else-if="pageType == 'list1'" ></page-list-content>
    <page-list-2-Content v-else-if="pageType == 'list2'"></page-list-2-Content>
    <page-list-3-Content v-else-if="pageType == 'list3'"></page-list-3-Content>
    <div v-else>
      <img src="../../../assets/about/business-scope.jpg" alt="" style="width:100%;">
    </div>
  </div>
</template>

<script>
  import PageContent from './PageContent'
  import PageListContent from './PageListContent'
  import PageList2Content from './PageList2Content'
  import PageList3Content from './PageList3Content'
  export default {
    model: {},
    props: {
      asideItem: Object,
    },
    components: {PageContent,PageListContent,PageList2Content,PageList3Content},
    created() {
    },
    mounted() {
    },
    data() {
      return {
        title: '',
        pageType: 'page'
      };
    },
    methods: {},
    computed: {
    },
    watch:{
      asideItem(){
        if (this.asideItem && this.asideItem.title) {
          this.title = this.asideItem.title;
          this.pageType = this.asideItem.pageType;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .Content {
  }
</style>
