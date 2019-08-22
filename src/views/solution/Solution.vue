<template>
  <div class="Solution">
    <img src="@/assets/solution/solution_banner.jpg" alt="" style="width:100%;">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address></page-address>
        <g-aside :aside-title="getPageTitle" :aside-items="'News Center'" @select="handleSelect"></g-aside>
      </div>
      <div style="width:75%;padding:0 25px 10px">
        <page-address-right style="margin-bottom:10px;"></page-address-right>
        <router-view :key="Key"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {},
    components: {},
    mixins:[],
    created() {
    },
    mounted() {
    },
    data() {
      return {
        selectedIndex: 0,
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
        return this.$route.path
      },
      Key(){
        return this.$route.path
      },
    },
    watch: {}
  };
</script>

<style lang="scss" scoped>
  .Solution {
  }
</style>
