<template>
  <div class="GAside">
    <div class="aside-wrapper" >
      <div class="aside-submenu-title">{{asideTitle}}</div>
      <div class="aside-submenu-item active"
           v-if="typeof(asideItems) === 'string'" @click="selected(0)">
        {{asideItems}}
      </div>
      <div v-else>
        <div class="aside-submenu-item"
             :class="{active: selectedIndex == index}"
             v-for="(item,index) in asideItems" :key="index"
             @click="selected(index,item)">
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {
      asideTitle: String,
      asideItems: [String,Array]
    },
    components: {},
    created() {
    },
    mounted() {
    },
    data() {
      return {
        selectedIndex: 1,
      };
    },
    methods: {
      selected(index,item){
        this.selectedIndex = index;
        this.$emit('select',index,item)
      }
    },
    computed: {},
  };
</script>

<style lang="scss" scoped>
  .GAside {
    .aside-wrapper{
      margin-top:20px;
      margin-bottom:10px;
      overflow: hidden;
      .aside-submenu-title{
        font-size: 14px;
        margin-bottom: 20px;
        margin-top: 20px;
      }
      .aside-submenu-item{
        background: #ccc;
        margin-bottom: 5px;
        padding:3px 15px;
        &:hover{
          color:#ff6600;
        }
        &.active{
          color:#ff6600;
        }
      }
    }
  }
</style>
