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
    </div>
    <div class="contains">
      <Skills v-if="active==0"></Skills>
      <workItem v-else></workItem>
    </div>

    <!-- <div class="panel panel-info works">
       <div class="panel-heading">线上作品</div>
       <div class="panel-body">
         <div class="alert alert-success" role="alert">
           <a target="_blank" href="http://www.zhendun360.com">真盾风险控制审核系统</a>
         </div>
         <div class="alert alert-info" role="alert">
           <a target="_blank" href="https://www.bjxcaifu.com">北极熊链盟PC端</a>
         </div>
         <div class="alert alert-info" role="alert">
           <a target="_blank" href="https://www.bjxcaifu.com">北极熊链盟H5端</a>
         </div>
         <div class="alert alert-info" role="alert">
           <a target="_blank" href="http://home.p2p.bjxcaifu.com">北极熊链盟后台</a>
         </div>
         <div class="alert alert-warning" role="alert">
           <a target="_blank" href="http://www.xingmafund.com">星玛基金</a>
         </div>
         <div class="alert alert-warning" role="alert">
           <a target="_blank" href="http://www.tongyifund.com">统谊基金</a>
         </div>
         <div class="alert alert-warning" role="alert">
           <a target="_blank" href="http://www.seefinegroup.com">世丰集团</a>
         </div>
         <div class="alert alert-danger" role="alert">
           <a target="_blank" href="http://www.liankur.com">链库PC端</a>
         </div>
         <div class="alert alert-danger" role="alert">
           <a target="_blank" href="https://m.lianku.org.cn">链库H5端</a>
         </div>
         <div class="alert alert-danger" role="alert">
           <a target="_blank" href="http://smartcold.org.cn">睿库PC端</a>
         </div>
         <div class="alert alert-danger" role="alert">
           <a target="_blank" href="https://m.cold360.cn">睿库H5端</a>
         </div>
       </div>
     </div>-->
  </div>
</template>

<script>
  import HeaderItem from "./child/Header"
  import WorkItem from "./WorkItem"
  import Skills from "./child/Skills"

  export default {
    name: 'Home',
    components: {
      HeaderItem,
      Skills,
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
