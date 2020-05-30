<template>
  <!-- 首页部分 -->
  <div class="home">
    <!-- 首页导航部分 -->
    <div class="home-nav">
      <!-- 搜索 -->
      <div class="nav-top">
        <h1>
          <img src="./images/home/title-nav/a.logo.png"
               alt=""
               class="logo" />
        </h1>
        <input type="text"
               placeholder="搜索商品，共28149款好物"
               class="title-search" />
        <button class="title-login">登录</button>
      </div>
      <!-- 导航 -->
      <div class="nav-bottom">
        <div class="nav-downOne"
             v-if="navShow">
          <span class="active">推荐</span>
          <span>居家生活</span>
          <span>服饰鞋包</span>
          <span>美食酒水</span>
          <img src="./images/home/title-nav/nav-down.png"
               alt=""
               @click="navShow = !navShow"
               class="downImg" />
        </div>
        <div class="nav-downTwo"
             v-else>
          <div class="downTwo-top">
            <p class="downTwo-title">全部频道</p>
            <img src="./images/home/title-nav/nav-up.png"
                 alt=""
                 @click="navShow = true" />
          </div>
          <div class="downTwo-bottom">
            <span class="active">推荐</span>
            <span>居家生活</span>
            <span>服饰鞋包</span>
            <span>美食酒水</span>
            <span>个护清洁</span>
            <span>母婴亲子</span>
            <span>运动旅行</span>
            <span>数码家电</span>
            <span>严选全球</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="home-content">
      <!-- 轮播图部分 -->
      <van-swipe class="my-swipe"
                 :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item>
          <img src="./images/home/swipe/swipe1.webp"
               alt="">
        </van-swipe-item>
        <van-swipe-item><img src="./images/home/swipe/swipe2.webp"
               alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/home/swipe/swipe3.webp"
               alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/home/swipe/swipe4.webp"
               alt=""></van-swipe-item>
      </van-swipe>
      <!-- 官方信息 -->
      <ul class="g-info">
        <li class="item">
          <span>
            <img src="./images/home/list/01.png"
                 alt="">
            网易自营品牌</span>

        </li>
        <li class="item">
          <span>
            <img src="./images/home/list/02.png"
                 alt="">
            30天无忧退货</span>
        </li>
        <li class="item">
          <span>
            <img src="./images/home/list/03.png"
                 alt="">
            48小时快速退款</span>
        </li>
      </ul>
      <!-- 产品列表 -->
      <ul class="pro-list">
        <li class="pro-item">
          <img src="./images/home/list/pro1.png"
               alt="">
          <span>新品首发</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro2.png"
               alt="">
          <span>居家生活</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro3.png"
               alt="">
          <span>服饰鞋包</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro4.png"
               alt="">
          <span>美食酒水</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro5.png"
               alt="">
          <span>个护清洁</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro6.png"
               alt="">
          <span>母婴亲子</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro7.png"
               alt="">
          <span>运动旅行</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro8.png"
               alt="">
          <span>数码家电</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro9.png"
               alt="">
          <span>全球特色</span>
        </li>
        <li class="pro-item">
          <img src="./images/home/list/pro10.gif"
               alt="">
          <span>好货抄底</span>
        </li>
      </ul>
      <!-- 促销 -->
      <div class="promotionModule">
        <div>
          <a href="javascript:#">
            <img src="./images/home/list/cuxiaologo.png"
                 alt=""
                 class="promot-new">
          </a>
        </div>
        <div>
          <a href="javascript:#">
            <img src="./images/home/list/fangyi.png"
                 alt=""
                 class="promot-yi">
          </a>
        </div>
        <div class="promot-list">
          <a href="javascript:#">
            <img src="./images/home/list/cuxiao2.png"
                 alt=""
                 class="">
          </a>
          <a href="javascript:#">
            <img src="./images/home/list/cuxiao3.png"
                 alt="">
          </a>
          <a href="javascript:#">
            <img src="./images/home/list/cuxiao3.png"
                 alt="">
          </a>
        </div>

      </div>
      <!-- 新人礼包 -->
      <div class="new-gift">
        <div class="newgift-title">
          <span> 新人专享礼 </span>
        </div>
        <div class="newgift-content">
          <div class="newgift-left">
            <p>新人专享礼包</p>
            <img src="./images/home/list/new.png"
                 alt="">
          </div>
          <div class="newgift-right">
            <div class="today-price">
              <span class="group">福利社</span>
              <span class="price">今日特价</span>
              <img src="./images/home/list/today-price.png"
                   alt="">
            </div>
            <div class="new-together">
              <span class="newper">新人拼团</span>
              <span class="oneMoney">一元起包邮</span>
              <img src="./images/home/list/new-together.png"
                   alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- 类目热销 -->
      <div class="categoryHotSellModule">
        <div class="module-title">
          <div class="title-text">类目热销榜</div>
        </div>
        <div class="module-list">
          <div class="list-top">
            <div class="left">
              <span>热销榜</span>
              <img src="./images/home/hotSell/rexiao.png"
                   alt="">
            </div>
            <div class="right">
              <span>好评榜</span>
              <img src="./images/home/hotSell/haoping.png"
                   alt="">
            </div>
          </div>
          <ul class="list-bottom">
            <li class="list-item">
              <span>居家生活榜</span>
              <img src=""
                   alt="">
            </li>
            <li class="list-item">
              <span>美食酒水榜</span>
              <img src=""
                   alt="">
            </li>
            <li class="list-item">
              <span>服饰鞋包榜</span>
              <img src=""
                   alt="">
            </li>
            <li class="list-item">
              <span>个护清洁榜</span>
              <img src=""
                   alt="">
            </li>
            <li class="list-item">
              <span>母婴亲子榜</span>
              <img src=""
                   alt="">
            </li>
            <li class="list-item">
              <span>严选全球榜</span>
              <img src=""
                   alt="">
            </li>
            <li class="list-item">
              <span>数码家电榜</span>
              <img src=""
                   alt="">
            </li>
            <li class="list-item">
              <span>运动旅行榜</span>
              <img src=""
                   alt="">
            </li>
          </ul>
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
      navShow: true, // nav显示框，默认显示
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.home
  width 100%
  height 100%
  background-color #DCDCDC
  // 首页头部搜索框
  .home-nav
    width 100%
    background-color white
    // 搜索阶层
    .nav-top
      display flex
      align-items center
      justify-content center
      margin-top 10px
      .logo
        width 69px
        height 20px
        vertical-align middle
      .title-search
        width 221px
        height 28px
        margin 0 5px
        border-style none
        background-color #D3D3D3
        border-radius 5px
      .title-login
        width 40px
        height 20px
        border 1px solid red
        background-color white
        color red
    // 导航阶层
    .nav-bottom
      width 100%
      margin-top 10px
      .nav-downOne
        width 100%
        display flex
        justify-content space-around
        font-size 15px
        font-weight 700
        vertical-align center
        span
          padding 5px
          &.active
            color red
            border-bottom 2px solid red
        .downImg
          width 15px
          height 15px
          padding 5px
          vertical-align bottom
      .nav-downTwo
        width 100%
        .downTwo-top
          display flex
          justify-content space-between
          font-size 16px
          font-weight 700
          margin 0 15px 0 15px
          img
            width 15px
            height 15px
            vertical-align bottom
        .downTwo-bottom
          width 100%
          display flex
          flex-direction align-items center
          flex-wrap wrap
          font-size 14px
          span
            width 75px
            height 28px
            border 1px solid #C0C0C0
            background-color #F5F5F5
            line-height 28px
            text-align center
            margin-left 12px
            margin-top 15px
            &.active
              border 1px solid red
              color red
  // 主体内容
  .home-content
    width 100%
    // 轮播图
    .my-swipe
      img
        width 100%
        height 148px
        display block
    // 官方信息
    .g-info
      display flex
      justify-content space-between
      padding 0 16px
      padding-bottom 10px
      background-color white
      .item
        font-size 12px
        margin-top 8px
        span
          vertical-align bottom
        img
          width 16px
          height 16px
          vertical-align bottom
    // 产品列表
    .pro-list
      width 100%
      height 170px
      display flex
      flex-direction column
      align-items center
      flex-wrap wrap
      border-top 1px solid #D3D3D3
      padding-top 10px
      background-color white
      .pro-item
        display flex
        flex-direction column
        align-items center
        img
          width 55px
          height 55px
          margin-bottom 8px
        span
          font-size 12px
          margin-bottom 5px
    // 促销
    .promotionModule
      width 100%
      .promot-new
        width 375px
        height 110px
        display block
        margin-bottom 10px
      .promot-yi
        width 355px
        height 80px
        display block
        margin 0 auto
      .promot-list
        margin-top 5px
        display flex
        justify-content center
        img
          width 115px
          height 110px
          margin 0 3px
    // 新人礼包
    .new-gift
      width 100%
      height 279px
      background-color white
      font-size 16px
      .newgift-title
        width 100%
        height 45px
        line-height 45px
        font-size 16px
        text-align center
        position relative
        span::before
          content ''
          position absolute
          top 20px
          left 125px
          width 12px
          height 2px
          background #333
        span::after
          content ''
          position absolute
          top 20px
          right 125px
          width 12px
          height 2px
          background #333
      .newgift-content
        width 100%
        display flex
        margin 0 15px
        .newgift-left
          width 171px
          height 217px
          background-color #F9E9CF
          margin-right 4px
          p
            padding-top 15px
            padding-left 15px
          img
            width 129px
            height 129px
            margin-left 20px
            margin-top 20px
        .newgift-right
          width 171px
          height 217px
          .today-price
            width 100%
            height 107px
            position relative
            background-color #FBE2D3
            margin-bottom 3px
            .group
              position absolute
              top 10px
              left 8px
            .price
              position absolute
              font-size 12px
              color #7F7F7F
              top 32px
              left 8px
            img
              position absolute
              right 0
              top 8px
              width 100px
              height 100px
          .new-together
            width 100%
            height 107px
            background-color #FFECC2
            position relative
            .newper
              position absolute
              top 10px
              left 8px
            .oneMoney
              position absolute
              font-size 12px
              color white
              background-color #CBB693
              padding 3px
              border-radius 5px
              top 32px
              left 8px
            img
              position absolute
              right 0
              top 8px
              width 100px
              height 100px
    // 类目热销
    .categoryHotSellModule
      width 100%
      margin-top 8px
      background-color white
      .module-title
        width 100%
        .title-text
          font-size 16px
          margin 0 12px
          height 50px
          line-height 50px
      .module-list
        width 100%
        .list-top
          margin 0 12px
          display flex
          font-size 14px
          .left
            width 170px
            height 100px
            background-color #F9F3E4
            margin-right 7px
            position relative
            span
              position absolute
              top 21px
              left 10px
            span::after
              content ''
              width 25px
              height 3px
              background #333
              position absolute
              top 21px
              left 0
            img
              position absolute
              top 0
              right 0
              width 100px
              height 100px
          .right
            width 170px
            height 100px
            background-color #EBEFF6
            position relative
            span
              position absolute
              top 21px
              left 10px
            span::after
              content ''
              width 25px
              height 3px
              background #333
              position absolute
              top 21px
              left 0
            img
              position absolute
              top 0
              right 0
              width 100px
              height 100px
        .list-bottom
          width 100%
          display flex
          align-items center
          justify-content space-around
          flex-wrap wrap
          margin-right 12px
          .list-item
            width 82px
            height 90px
            background-color #F5F5F5
            margin-top 8px
</style>
