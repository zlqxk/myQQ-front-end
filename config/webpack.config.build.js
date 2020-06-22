const path = require('path');

module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'index.js',
    path:path.resolve(__dirname, '../dist'),
    publicPath:"//47.111.171.15:7001/myqq/",
  },
  mode:'production',
}