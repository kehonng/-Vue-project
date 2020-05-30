<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
// 引入组件
export default {
  name: 'App',
  // 注册组件
  components: {},
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.html,.body
  width 100%px
  height 100%px
  .container
    width 100%px
    height 100%px
</style>
