<template>
  <div id="app">
    <g-header v-if="getRouterName !== '404'"></g-header>
    <router-view/>
    <g-footer v-if="getRouterName !== '404'"></g-footer>
  </div>
</template>
<script>
  import GHeader from '@/components/GHeader'
  import GFooter from '@/components/GFooter'
  export default {
    components: {
      GHeader,GFooter
    },
    data() {
      return {
      }
    },
    computed:{
      getRouterName(){
        return this.$route.name
      }
    }
  }
</script>

<style lang="scss">

/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*max-width:1024px;*/
  /*margin:0 auto;*/
/*}*/

</style>
