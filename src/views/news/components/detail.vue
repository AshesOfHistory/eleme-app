<template>
  <div class="detail">
    <div >{{detail.Title}}</div>
    <div v-html="detail.Content"></div>
    <div >{{detail.ShowTime}}</div>
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
      let detail = JSON.parse(window.localStorage.getItem('NewsDetail'))
      if(detail){
        this.detail = detail
      }
    },
    data() {
      return {
        detail:{}
      };
    },
    methods: {},
    computed: {},
    watch: {}
  };
</script>

<style lang="scss" scoped>
  .detail {
    padding-top:10px;
  }
</style>
