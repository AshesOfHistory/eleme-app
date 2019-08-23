<template>
  <div class="Solution">
    <img src="@/assets/solution/solution_banner.jpg" alt="" style="width:100%;">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <page-address></page-address>
        <g-aside :aside-title="getPageTitle" :aside-items="'News Center'" @select="handleSelect">
          <div v-for="(item,index) in items" :key="index">
            {{ item }}
          </div>
        </g-aside>
      </div>
      <div style="width:75%;padding:0 25px 10px">
        <page-address-right style="margin-bottom:10px;"></page-address-right>
        <router-view :key="Key"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import protype from '@/data/t_protype.js'
  export default {
    model: {},
    props: {},
    components: {},
    mixins:[],
    created() {
      this.menuList = protype.RECORDS
    },
    mounted() {
    },
    data() {
      return {
        selectedIndex: 0,
        menuList:[]
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
