<template>
  <div class="detail">
    <div style="text-align: center;font-weight: bold;font-size: 16px;">{{detail.Title}}</div>
    <div v-html="detail.Content" style="margin:20px 0;"></div>
    <div >{{detail.ShowTime && detail.ShowTime.length >= 9 ? detail.ShowTime.substring(0,9) : detail.ShowTime}}</div>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {},
    components: {},
    created() {
      let detail = JSON.parse(window.localStorage.getItem('NewsDetail'))
      if(detail){
        this.detail = detail
      }
    },
    mounted() {
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
