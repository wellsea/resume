<template>
 <div class="home">
   <div class="head">
     <h2>井海洋</h2>
     <p>前端开发工程师   20k~25k</p>
     <p><span class="glyphicon glyphicon-earphone"></span>13339077379</p>
     <p>四年前端开发经验，半年带实习生经验；</p>
     <p>较强的沟通和自我学习能力，良好的团队合作精神。</p>
     <img src="@/assets/img/logo.png" alt="井海洋">
   </div>
   <div class="panel panel-success">
     <div class="panel-heading">掌握技能</div>
     <div class="panel-body grey">
       <p>1.熟练使用Html5+CSS3完成页面排版布局</p>
       <p>2.熟练使用vue、angularjs1.x、jQuery、less、sass、stylus</p>
       <p>3.熟练使用Git版本管理工具</p>
       <p>4.有混合开发、小程序、微信公众号开发经验</p>
       <p>5.熟悉angular2+、ES6、Typescript基本语法</p>
       <p>6.对IE兼容性处理有一定的经验</p>
       <p>7.熟练使用IntelliJ idea、webstorm等开发工具</p>
       <p>8.熟练浏览器调试工具使用</p>
       <p>9.使用tomcat+Maven启动java项目</p>
       <p>10.Bootstrap、 layui、adminlte、vant、Ydui</p>
     </div>
   </div>
   <div class="panel panel-info works">
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
   </div>
 </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .home
    color: #42b983
    .grey
      color: #2c3e50
    a
      color:inherit
    .head
      padding: 15px
      position: relative
      img
        width: 80px
        position: absolute
        right 15px
        top:15px
</style>
