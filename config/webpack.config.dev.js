const path = require('path')

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'index.js',
    path:path.resolve(__dirname, '../dist'),
    publicPath:"//localhost:9001/",
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 9001,
    disableHostCheck: true,
    open:true,
    historyApiFallback: true,
    proxy: {
      'http://localhost:9001': {
        target: 'http://127.0.0.1:7001',// 接口的域名
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
      }
    }
  }
}