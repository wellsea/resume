<template>
  <div class="home">
    <HeaderItem></HeaderItem>
    <van-sticky>
      <div class="flex tac bold">
        <div class="head-title item"
             v-for="(item, index) in tabList"
             :key="index"
             v-text="item"
             :class="{current:active==index}"
             @click="tabClick(index)">
        </div>
      </div>
    </van-sticky>
    <div class="contains">
      <Skills v-if="active==0"></Skills>
      <workItem v-if="active==1"></workItem>
      <EducateItem v-if="active==2"></EducateItem>
      <ResultItem v-if="active==3"></ResultItem>
    </div>
  </div>
</template>

<script>
  import HeaderItem from "./child/Header"
  import WorkItem from "./WorkItem"
  import EducateItem from "./EducateItem"
  import ResultItem from "./ResultItem"
  import Skills from "./child/Skills"

  export default {
    name: 'Home',
    components: {
      HeaderItem,
      Skills,
      EducateItem,
      ResultItem,
      WorkItem
    },
    data() {
      return {
        active: 0,
        tabList: [
          '掌握技能',
          '工作经历',
          '教育经历',
          '线上作品'
        ]
      }
    },
    methods: {
      tabClick (index) {
        this.active = index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .contains
    padding 0 15px
  .flex
    padding 0 15px
    background-color: #fff
    >div
      border-bottom: 2px solid #eee
      line-height 40px
      -webkit-transition: all .3s
      transition: all .3s
      font-size 16px
      &.current
        border-bottom-color: #42b983
        color #42b983
</style>
