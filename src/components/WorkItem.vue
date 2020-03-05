<template>
    <ul class="work">
      <router-link tag="li"
                   v-for="(item, index) in company"
                   :key="index"
                   class="flex"
                   :to="'info?id='+item.id">
        <img :src="item.logo" class="left" width="60"/>
        <div class="center">
          <b class="title">{{item.name}}</b>
          <p>工作时间：{{item.date}}</p>
          <p>使用技术：{{item.skill}}</p>
        </div>
        <van-icon name="arrow" class="right"/>
      </router-link>
    </ul>
</template>

<script>

  export default {
    name: 'WorkItem',
    data() {
      return {
        active: 0,
        company: [
          {
            id: 10,
            date: '2019-10~2020-03',
            name: '上海优动网络科技有限公司',
            desc: '电商小程序',
            logo: require('./../assets/img/yd.jpg'),
            skill: 'Taro, react, redux, ant-design, 小程序'
          },
          {
            id: 1,
            date: '2018-11~2019-09',
            name: '住建鸟网络科技有限公司',
            desc: '互联网金融贷',
            logo: 'http://dist.zjbird.com/icon/zjbird.png',
            skill: 'vue, weixin-jssdk, vant, mint, vue-resource, ali-oss, sass'
          },
          {
            id: 2,
            date: '2018-06~2019-03',
            name: '北极熊链盟',
            desc: '互联网金融贷',
            logo: require('./../assets/img/bjx.png'),
            skill: 'angularjs1.x, gulp, requirejs, sass, vue, axios'
          },
          {
            id: 3,
            date: '2016-06~2018-06',
            name: '睿冷信息技术有限公司',
            desc: '冷库、冷链',
            logo: require('./../assets/img/lk.jpg'),
            skill: 'angularjs1.x, ionic1.x, jquery'
          },
          {
            id: 4,
            date: '2016-03~2018-05',
            name: '博彦科技(上海)有限公司',
            desc: '外派到平安健康',
            logo: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/cc17436f2c79312a5712efa270d8bf81_121_121.jpg',
            skill: 'jquery, bootstrap'
          },
          {
            id: 5,
            date: '2014-07~2015-10',
            name: '上海嘉来景观工程有限公司',
            desc: '景观园林',
            logo: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM5rtOXZsgobfBk3amibs6wpng7ZKgqVqogNiaoiafttx2npQ/0',
            skill: 'jquery'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .work
    padding-bottom 20px
    li
      position: relative
      padding 20px 0
      line-height 22px
      justify-content: space-around
      align-items center
      border-bottom: 2px dashed #eee
      .left
        border-radius: 50%;
        color: #999
      .right
        font-size 20px
        color: #999
      .center
        padding 0 10px
        p
          color: #999
        .title
          display: block
          font-size 16px
          margin-bottom 6px

</style>
