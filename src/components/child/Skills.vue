<template>
  <div class="skill">
    <div v-for="(item, index) in skills" :key="index" class="flex">
      <span v-text="index+1"></span>
      <p v-text="item.desc"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Skills',
    data () {
      return {
        skills: [
          {desc: '熟练使用Html5+CSS3完成页面排版布局'},
          {desc: '熟练使用react、vue、angularjs1.x、jQuery、less、sass、stylus，uniapp'},
          {desc: '熟练使用Git版本管理工具'},
          {desc: '有混合开发、小程序、微信公众号，uniapp开发经验'},
          {desc: '对IE兼容性处理有一定的经验'},
          {desc: '熟练使用Bootstrap、layui、vant、Taro、mint、antDesign等'},
          {desc: '熟练浏览器调试工具+feddle抓包使用'},
          {desc: '使用tomcat+Maven启动java项目'},
          {desc: '熟练使用IntelliJ IDEA、webstorm等开发工具'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .skill
    padding 20px 0
  .flex
    margin-bottom 10px
    line-height: 20px
    span
      width 22px
    p
      flex: 1
</style>
