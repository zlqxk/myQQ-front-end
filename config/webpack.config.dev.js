const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'index.js',
    path:path.resolve(__dirname, '../dist'),
    publicPath:"//localhost:9001/",
  },

  devtool: "source-map",

  //webpack在启动后会从配置的入口模块触发找出所有依赖的模块，
  //Resolve配置webpack如何寻找模块对应的文件。webpack内置JavaScript模块化语法解析功能，
  //默认会采用模块化标准里约定好的规则去寻找，但你可以根据自己的需要修改默认的规则。
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    //在导入语句没带文件后缀时，webpack会自动带上后缀去尝试访问文件是否存在。resolve.extensions用于配置在尝试过程中用到的后缀列表
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         hmr: process.env.NODE_ENV === 'development',
      //       },
      //     },
      //     'css-loader',
      //     'less-loader',
      //   ],
      // },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },

  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    // 我们需要webpack告诉我们那个模块需要那个打包文件
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
    // new MiniCssExtractPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 9001,
    disableHostCheck: true,
    open:true,
    proxy: {
      'http://localhost:9001': {
        target: 'http://127.0.0.1:7001',// 接口的域名
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
      }
    }
  }
}