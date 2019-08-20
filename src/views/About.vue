<template>
  <div class="About">
    <div class="flex-box" style="margin-top:25px;">
      <div style="width:25%;">
        <div style="font-size: 16px;text-align: left;">Home - About Us - Company Introduction</div>
        <div style="margin-top:20px;margin-bottom:10px;">
          <div style="font-size: 24px">About Us</div>
          <div class="aside-item"
               :class="{active: selectedIndex == index}"
               v-for="(item,index) in asideItemArr" :key="index"
               @click="selected(index)">
            {{item}}
          </div>
        </div>
      </div>
      <div style="display: flex;width:75%;">
        <div style="font-size:24px;border-bottom:1px dashed #3c3c3c;height:1em;display: flex;width:100%;margin-left:20px;padding-bottom:4px;">
          News
          <span style="font-size: 16px;color:#777;display: flex;flex-grow: 1;justify-content: flex-end;align-items: center;">more</span>
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
    },
    mounted() {
    },
    data() {
      return {
        asideItemArr: ['Company Indroction','Honor Qualifications', 'Equipment Demonstration', 'The Businese Scope', 'LED Laboratory'],
        selectedIndex: 0
      };
    },
    methods: {
      selected(index){
        this.selectedIndex = index
      }
    },
    computed: {},
  };
</script>

<style lang="scss" scoped>
  .About {
    .aside-item{
      background: #ccc;
      margin-bottom: 5px;
      padding:3px 15px;
      &:hover{
        color:orange;
      }
      &.active{
        color:orange;
      }
    }
  }
</style>
