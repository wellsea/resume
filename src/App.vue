<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <a class="download" target="_blank"
       href="https://jinghy-1256418697.cos.ap-chengdu.myqcloud.com/井海洋-4年前端-感谢查阅.pdf">简历下载</a>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .download {
    position: fixed;
    right: 0;
    bottom: 2em;
    background-color: #07c16052;
    padding: 2px 4px;
    border-radius: 2px;
  }

  .info-page .van-sticky--fixed li {
    padding: 15px;
    box-shadow: 0 -1px 2px #ccc;
  }
</style>
