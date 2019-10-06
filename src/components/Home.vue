<template>
  <div class="home">
    <HeaderItem></HeaderItem>
    <div class="flex tac bold">
      <div class="head-title item"
           :class="{current:active==0}"
           @click="active=0">
        掌握技能
      </div>
      <div class="head-title item"
           :class="{current:active==1}"
           @click="active=1">
        工作经历
      </div>
      <div class="head-title item"
           :class="{current:active==2}"
           @click="active=2">
        教育经历
      </div>
      <div class="head-title item"
           :class="{current:active==3}"
           @click="active=3">
        线上作品
      </div>
    </div>
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
        active: 0
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
    >div
      border-bottom: 2px solid #eee
      line-height 40px
      -webkit-transition: all .5s
      transition: all .5s
      font-size 16px
      &.current
        border-bottom-color: #42b983
        color #42b983
</style>
