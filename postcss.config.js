module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5, //结果为：设计稿元素尺寸/37.5(一般750px的设计稿的根元素大小设置37.5)，比如元素宽375px,最终页面会换算成 10rem
      propList: ['*'], //属性的选择器，*表示通用
      selectorBlackList: [] // 忽略的选择器.ig - 表示.ig - 开头的都不会转换
    }
  }
}