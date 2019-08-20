<template>
  <div class="PageContent">
    <div class="page-content-title">Company introduction</div>
    <div class="flex-box" style="justify-content: space-around">
      <div class="flex-item">
        <img src="@/assets/about/1-h-1.jpg" alt="">
        <div class="img-title">HONESTY&CREDIBILITY</div>
      </div>
      <div class="flex-item">
        <img src="@/assets/about/1-h-2.jpg" alt="">
        <div class="img-title">TEAMWORK</div>
      </div>
      <div class="flex-item">
        <img src="@/assets/about/1-h-3.jpg" alt="">
        <div class="img-title">INNOVATION</div>
      </div>
    </div>
    <p class="bold-paragraph">Lumitek Group, founded in 1998, has always been designing and manufacturing top quality products with innovation for our valuable customers worldwide.</p>
    <div>
      <p class="orange-paragraph">1. Lumitek - Wiring devices and electrical accessories.</p>
      <p class="orange-paragraph">2. Lumitek Lighting - LED lighting products.</p>
      <p class="orange-paragraph">3. Ankuoo - Creative consumer electronics products. </p>
    </div>
    <p class="indent-paragraph">
      Lumitek Group concentrates on designing and manufacturing innovative products which make our business partners stay ahead of their competitors. We invest considerable part of our annual profit to keep sustainable development for ourselves and our business partners. Customers are regarded as our long term partners rather than simply buyers.
    </p>
    <p class="indent-paragraph">
      As a professional player in the industry, Lumitek Group is your best partner for designing and developing solutions to open new business possibilities in the market !
    </p>
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
    },
    data() {
      return {};
    },
    methods: {},
    computed: {},
  };
</script>

<style lang="scss" scoped>
  .PageContent {
    .page-content-title{
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 700;
    }

    .img-title{
      color: #ff6600;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
    }
    .bold-paragraph{
      font-weight: bold;
      margin-top: 30px;
      line-height: 25px;
    }
    .orange-paragraph{
      color:#ff6600;
      font-size: 12px;
      line-height: 25px;
    }
    .indent-paragraph{
      line-height: 25px;
      text-indent: 2em;
      font-size: 12px;
    }
  }
</style>
