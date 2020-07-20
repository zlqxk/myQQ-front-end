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
    open:true
  }
}