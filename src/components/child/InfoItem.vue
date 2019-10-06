<template>
  <ul class="info-page" v-if="data">
    <li class="info-page-title">
      <h2>{{data.name}}</h2>
      <p>{{data.workTime}}</p>
    </li>
    <li>
      <h3>项目经历</h3>
      <van-collapse v-model="active">
        <van-collapse-item
          v-for="(item, index) in data.project"
          :title="item.name"
          :name="item.id"
          :key="index">
          <h4 v-if="item.website">线上地址：<a :href="item.website" target="_blank" v-text="item.name"></a></h4>
          <h4>开发时间：{{item.time}}</h4>
          <h4>项目描述</h4>
          <div class="info-page-desc">
            <p v-text="item.desc"></p>
          </div>
          <h4>职责描述</h4>
          <div class="info-page-desc">
            <p v-for="(desc, i) in item.jobDesc" v-text="i+1 +'、'+desc" :key="i"></p>
          </div>
        </van-collapse-item>
      </van-collapse>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        active: [1],
        companyData: [
          {
            name: '住建鸟网络科技有限公司',
            workTime: '2019-03~2019-09',
            id: 1,
            project: [
              {
                name: '招工找活',
                id: 1,
                website: 'http://uapp.zjbird.com/jobs/',
                time: '2019.3~至今',
                desc: '为业主和工友提供一个发布优质项目，寻找优质工友的一个平台。',
                jobDesc: [
                  '使用node+webpack+vue2.0+vue-resource完成页面制作及数据交互',
                  '调用微信jssdk实现登录、支付及分享功能完成',
                  '配合原生实现h5和native交互',
                  '使用路由懒加载，cdn等，优化页面性能，提升用户体验'
                ]
              }, {
                name: '工友圈',
                id: 2,
                website: 'http://uapp.zjbird.com/jobs/#/workerCircleIndex',
                time: '2019.5~至今',
                desc: '提供工友发布和分享帖子，交流技术的平台。',
                jobDesc: [
                  '使用ali-oss上传图片和视频',
                  '调用原生查看大图及下载功能'
                ]
              }, {
                name: '鸟币签到',
                id: 3,
                website: 'http://uapp.zjbird.com/jobs/#/signIn?workerId=19853',
                time: '2019.6~至今',
                desc: '工友每日签到送鸟币，并可以提现。',
                jobDesc: [
                  '调用后台接口实现签到',
                  '完成任务送鸟币'
                ]
              }, {
                name: '中国工友网',
                id: 4,
                website: 'http://www.zggy888.com',
                time: '2019.7~至今',
                desc: '查询工友信息及施工案例的平台。',
                jobDesc: [
                  '使用vue3.0+axios完成页面制作及数据交互',
                  '使用ali-oss上传图片',
                  '使用媒体查询实现页面自适应'
                ]
              }, {
                name: '住建鸟官网',
                id: 5,
                website: 'http://zjbird.com',
                time: '2019.5~至今',
                desc: '住建鸟官网。',
                jobDesc: [
                  '使用vue2.0+less+jsp+jquery完成页面制作及数据交互'
                ]
              }
            ]
          },
          {
            name: '链盟供应链管理（上海）有限公司',
            workTime: '2018-06~2019-09',
            id: 2,
            project: [
              {
                name: '真盾风险控制审核系统',
                id: 1,
                website: 'http://www.zhendun360.com',
                time: '2018.6.11~2018.7.22',
                desc: '互联网小额贷款后台操作系统。',
                jobDesc: [
                  '使用html+css+jsp+jQuery+ajax完成页面制作及数据交互',
                  '使用七牛云实现多文件上传及存储'
                ]
              }, {
                name: '北极熊链盟',
                id: 2,
                website: 'https://www.bjxcaifu.com',
                time: '2018.9~2019.8',
                desc: '专注服务中小微企业的供应链金融平台。',
                jobDesc: [
                  '使用html+css+angularjs+requirejs+gulp完成PC页面制作及数据交互，并在一周内完成页面改版工作',
                  '配合外包人员开发混合APP并调试修复安卓iOS上面的功能',
                  '配合java后台使用FreeMarker+jquery完成后台管理系统开发任务',
                  '、配合java后台使用FreeMarker+jquery完成微信端开发任务',
                  '使用node+webpack+vue+vuex+YDUI+sass完成微信端页面改版迭代及数据交互工作',
                  '调用银行支付接口完成充值、提现、投资理财功能',
                  '带领前端实习生熟悉项目及分配开发任务并检查验收'
                ]
              }, {
                name: '世丰集团',
                id: 3,
                website: 'http://www.seefinegroup.com/',
                time: '2019.2.20~至今',
                desc: '世丰集团官网。',
                jobDesc: [
                  '带领前端成员完成官网开发及维护工作'
                ]
              }, {
                name: '星玛基金',
                id: 4,
                website: 'http://www.xingmafund.com',
                time: '2019.1.28~2019.2.22',
                desc: '集团旗下子公司星玛基金官网。',
                jobDesc: [
                  '带领前端成员完成官网开发及维护工作'
                ]
              }, {
                name: '统谊基金',
                id: 5,
                website: 'http://www.tongyifund.com',
                time: '2019.2.18~2019.2.28',
                desc: '集团旗下子公司统谊基金官网。',
                jobDesc: [
                  '带领前端成员完成官网开发及维护工作'
                ]
              }
            ]
          },
          {
            name: '睿冷信息技术有限公司',
            workTime: '2016-06~2018-06',
            id: 3,
            project: [
              {
                name: '链库官网',
                id: 1,
                website: 'http://lianku.org.cn',
                time: '2016.6~2018.6',
                desc: '冷库物联网大数据服务平台,为冷库主提供找库便利。',
                jobDesc: [
                  '在没有设计图的情况下，独自完成排版设计',
                  '使用html+css++bootstrap+angularjs+jQuery完成页面框架搭建制作及数据交互',
                  '两年内改版三次'
                ]
              }, {
                name: '链库webApp',
                id: 2,
                website: 'https://m.lianku.org.cn',
                time: '2016.6~2018.6',
                desc: 'h5手机端官网。',
                jobDesc: [
                  '在没有设计图的情况下，独自完成排版设计',
                  '使用html+css+angularjs+ionic1.x完成页面框架搭建制作及数据交互',
                  '两年内改版三次'
                ]
              }, {
                name: '链库后台管理系统',
                id: 3,
                website: 'http://sys.liankur.com',
                time: '2016.7~2018.6',
                desc: '链库后台管理系统。',
                jobDesc: [
                  '在没有设计图的情况下，独自完成排版设计',
                  '使用html+css++bootstrap+angularjs+jQuery完成页面框架搭建制作及数据交互'
                ]
              }, {
                name: '冷库360',
                id: 4,
                website: 'http://smartcold.org.cn',
                time: '2016.7~2018.6',
                desc: '冷库温度电量能耗监控分析平台。',
                jobDesc: [
                  '使用angularjs+adminlte+echarts+highcharts+baidu地图api完成页面开发及数据交互'
                ]
              }, {
                name: '冷库360 webAPP',
                id: 5,
                website: 'https://m.cold360.cn',
                time: '2016.7~2018.6',
                desc: '手机端冷库360。',
                jobDesc: [
                  '使用angularjs+ionic完成页面开发及数据交互',
                  '期间改版两次'
                ]
              }
            ]
          },
          {
            name: '博彦科技(上海)有限公司(外派平安健康)',
            workTime: '2016-03~2018-05',
            id: 4,
            project: [
              {
                name: '龙猫系统资源管理',
                id: 1,
                website: '',
                time: '2016.5',
                desc: '龙猫内部系统的迭代更新、前端开发和后台交互工作。',
                jobDesc: [
                  '前端页面的设计展示和部分交互工作进行',
                  '离职时前端页面展示完结，大部分交互实现，项目尚未上线',
                  '内部系统，外网无法访问'
                ]
              }, {
                name: '龙猫系统质量报表',
                id: 2,
                website: '',
                time: '2016.4~2016.5',
                desc: '各个部门的数据报表需求用代码实现页面展示。',
                jobDesc: [
                  '根据产品经理需求，把各个部门的数据报表需求用代码实现页面展示，使用bootstrap框架和jquery、highchart，实现简单交互',
                  '负责前端页面的设计和切图展示，部分交互实现，把实现的页面嵌入iframe框架内部 '
                ]
              }
            ]
          },
          {
            name: '上海嘉来景观工程有限公司',
            workTime: '2014-07~2015-10',
            id: 5,
            project: [
              {
                name: '公司官网开发',
                id: 1,
                website: 'http://jialai88.cn/',
                time: '2014-07~2015-10',
                desc: '公司官网。',
                jobDesc: [
                  '根据产品经理和UI设计师的设计要求，完成web页面的开发工作',
                  '跟设计师沟通,将设计原型图通过HTML和CSS完成静态页面效果图,并优化代码',
                  '编写javascript代码和jquery代码，处理简单的页面特效和用户体验设计',
                  '解决web界面在主流浏览器上的兼容问题',
                  '配合上级完成交代的其他工作'
                ]
              }
            ]
          }
        ],
        data: null
      }
    },
    mounted() {
      for (let i in this.companyData){
        if (this.id == this.companyData[i].id) {
          this.data = this.companyData[i];
          return
        }
      }
    }
  }
</script>
