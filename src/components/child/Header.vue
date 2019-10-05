<template>
  <div class="head">
    <h2>井海洋</h2>
    <p>前端开发工程师 20k~25k</p>
    <p>
      <van-icon name="phone" />
      <a href="tel:13339077379">13339077379</a>
    </p>
    <p>四年前端开发经验，1年带实习生经验；</p>
    <p>较强的沟通和自我学习能力，良好的团队合作精神。</p>
    <div class="img"></div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderItem'
  }
</script>

<style scoped lang="stylus">
  .head
    padding: 15px
    position: relative
    a
      color inherit
    h2
      padding 15px 0 28px
    p
      margin-bottom 10px
      i
        vertical-align: middle
    .img
      width: 90px
      height 126px
      position: absolute
      right 15px
      top: 15px
      background url("../../assets/img/logo.png") center no-repeat #eee
      background-size contain

</style>
