<template>
    <ul class="work">
      <router-link tag="li"
                   v-for="(item, index) in company"
                   :key="index"
                   class="flex"
                   :to="'info?id='+item.id">
        <van-icon name="flag-o" class="left"/>
        <div class="center">
          <b class="title">{{item.name}}</b>
          <p>工作时间：{{item.date}}</p>
          <p v-if="item.website">线上地址：{{item.website}}</p>
        </div>
        <van-icon name="arrow" class="right"/>
      </router-link>
    </ul>
</template>

<script>
  import ZjbirdPage from "./child/ZjbirdPage"
  import BjxPage from "./child/BjxPage"
  import LiankuPage from "./child/LiankuPage"
  import PinganPage from "./child/PinganPage"
  import JialaiPage from "./child/JialaiPage"

  export default {
    name: 'WorkItem',
    components: {
      ZjbirdPage,
      BjxPage,
      LiankuPage,
      PinganPage,
      JialaiPage
    },
    data() {
      return {
        active: 0,
        company: [
          {
            id: 1,
            date: '2018-11~2019-09',
            name: '住建鸟网络科技有限公司',
            desc: '互联网金融贷',
            website: 'https://www.zjbird.com/'
          },
          {
            id: 2,
            date: '2018-06~2019-03',
            name: '北极熊链盟',
            desc: '互联网金融贷',
            website: 'https://www.bjxcaifu.com'
          },
          {
            id: 3,
            date: '2016-06~2018-06',
            name: '睿冷信息技术有限公司',
            desc: '冷库、冷链',
            website: 'http://www.liankur.com'
          },
          {
            id: 4,
            date: '2016-03~2018-05',
            name: '博彦科技(上海)有限公司',
            desc: '外派到平安健康',
            website: ''
          },
          {
            id: 5,
            date: '2014-07~2015-10',
            name: '上海嘉来景观工程有限公司',
            desc: '景观园林',
            website: ''
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
        font-size 30px
        color: #999
      .right
        font-size 20px
        color: #999
      .center
        padding 0 10px
        .title
          display: block
          font-size 16px
          margin-bottom 6px

</style>
