const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,  //清理默认打出来的html

    assetModuleFilename: 'images/[contenthash][ext]'    //自定义资源文件位置和名称
  
  },

  plugins: [
    new HtmlWebpackPlugin({ //基于自己的html打包
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    }) 
  ],
  devServer: {
    static: './dist'
  },

  mode: 'development',
  devtool: 'inline-source-map',  //开发环境报错查看
  
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.jpeg$/,
        type: 'asset',
        parser:{
          dataUrlCondition:{
            maxSize : 100 * 1024 
          }
        }
      }
    ]
  }
}