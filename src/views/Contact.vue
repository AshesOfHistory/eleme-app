<template>
  <div class="Contact">
    <img src="../assets/contact/banner1.jpg" alt="" style="width: 100%;">
    <div class="flex-box" style="margin-top: 25px;">
      <div style="width:25%;">
        <page-address></page-address>
        <g-aside :aside-title="'CONTACT US'" :aside-items="'CONTACT US'"></g-aside>
      </div>
      <div style="width:75%;padding:0 25px 10px;">
        <page-address-right></page-address-right>
        <div class="page-content">
          <div class="page-content-title">CONTACT US</div>
          <img src="../assets/contact/1-1.jpg" alt="" style="width: 100%;">
          <p style="color:#99cc00;font-weight: bold">LUMITEK GROUP</p>
          <p class="paragraph">Add：No.18,Lane239,Beihai Road,Jiangbei,Ningbo,China</p>
          <p class="paragraph">Tel：+86-574-88165605</p>
          <p class="paragraph">Fax：+86-574-88165666</p>
          <p class="paragraph">E-mail：jacky@lumitek.cn</p>
          <div id="container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {},
    components: {},
    created() {
      let self = this;
      // let tip = document.createElement('script')// 地图辅助标记点提示，英文转换
      // tip.setAttribute('src','https://m.amap.com/navi/?dest=121.523995,29.931119&destName=瑞明电器&hideRouteIcon=1&key=22bcbed32d531383dd420e8f0a6f2325')
      // document.head.appendChild(tip)

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

    .page-content-title{
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: 700;
      font-family: "Times New Roman";
    }

    .paragraph{
      line-height: 24px;
      color:#464444;
      font-size: 12px;
    }

    #container {
      margin-top: 10px;
      width:700px;
      height: 300px;
    }
  }
</style>
