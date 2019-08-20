<template>
  <div class="Content">
    <page-content v-if="pageType == 'page'"></page-content>
    <page-list-content v-else-if="pageType == 'list'" ></page-list-content>
    <div v-else>
      <img src="../../../assets/about/business-scope.jpg" alt="" style="width:100%;">
    </div>
  </div>
</template>

<script>
  import PageContent from './PageContent'
  import PageListContent from './PageListContent'
  export default {
    model: {},
    props: {
      asideItem: Object,
    },
    components: {PageContent,PageListContent},
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
