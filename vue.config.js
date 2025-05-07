const path = require('path')
module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'dist', // 构建输入目录
  assetsDir: 'assets', // 静态资源目录（js，css,img,fonts）
  lintOnSave: true, // 是否开启eslint保存检测，有效值：true||false||‘error’
  devServer: {
    open: false, // 构建成功是否自动打开浏览器
    // host:"0.0.0.0" //真机测试时使用
    host: '0.0.0.0',
    port: 8080, // 端口号
    https: false,
    hotOnly: true // 热更新
  },
  configureWebpack: {},

}
