<template>
  <div class="Contact">
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {},
    components: {},
    created() {
      let self = this;
      let aMapScript = document.createElement('script')
      aMapScript.setAttribute('src', 'https://webapi.amap.com/maps?v=1.4.15&key=22bcbed32d531383dd420e8f0a6f2325')
      document.head.appendChild(aMapScript)
      aMapScript.onload=function () {
        self.storeMap = new AMap.Map('container', {
          center:['121.523995','29.931119'],
          resizeEnable: true,
          zoom: 16,
        });
      }
    },
    mounted() {
    },
    data() {
      return {};
    },
    methods: {
    },
    computed: {},
    watch: {}
  };
</script>

<style lang="scss" scoped>
  .Contact {
    #container {width:500px; height: 300px; }
  }
</style>
