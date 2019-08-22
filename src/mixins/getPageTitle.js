export default {
  computed:{
    getPageTitle(){
      if (this.$route.name == 'News') {
        return 'News Center'
      }
      return this.$route.path
    },
    Key(){
      return this.$route.path
    },
  }
}
