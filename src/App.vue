<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <g-header></g-header>
    <router-view/>
  </div>
</template>
<script>
  import GHeader from '@/components/GHeader'
  export default {
    components: {
      GHeader
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  html,body,#app{
    height:100%;
    width:100%;
  }
  #app{
    max-width: 1024px;
    margin:0 auto;
  }
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
