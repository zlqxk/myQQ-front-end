const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack").container
.ModuleFederationPlugin;
const devConfig = require('./webpack.config.dev');
const proConfig = require('./webpack.config.build');

const commonConfig = {
  //webpack在启动后会从配置的入口模块触发找出所有依赖的模块，
  //Resolve配置webpack如何寻找模块对应的文件。webpack内置JavaScript模块化语法解析功能，
  //默认会采用模块化标准里约定好的规则去寻找，但你可以根据自己的需要修改默认的规则。
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    //在导入语句没带文件后缀时，webpack会自动带上后缀去尝试访问文件是否存在。resolve.extensions用于配置在尝试过程中用到的后缀列表
    extensions: [".jsx", ".js", ".json"],
    // 添加别名
    alias: {
      '$src': path.resolve(__dirname, '../src/')
    }
  },

  module: {
    rules: [
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
    new ModuleFederationPlugin({
      name: "app1",
      library: { type: "var", name: "app1" },
      filename: "remoteEntry.js",
      remotes: {
        app2: "app2",
      },
      // app2 is expecting "styled-components" shared dependency
      // shared: ["react", "react-dom"],
    })
  ]
}

module.exports = env => {
  if(env == 'dev') {
    return {
      ...devConfig,
      ...commonConfig
    }
  }else {
    return {
      ...proConfig,
      ...commonConfig
    }
  }
}