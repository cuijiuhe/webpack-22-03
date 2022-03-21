const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')  //抽离css 从style标签改为link形式引入css 基于webpack5
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')  //压缩css

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
    }),

    new MinCssExtractPlugin({
      filename: 'style/[contenthash].css' //制定打爆出来的css位置和文件名
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
        test: /\.(jpeg|jpg|gif)$/,
        type: 'asset',
        parser:{
          dataUrlCondition:{
            maxSize : 100 * 1024 
          }
        }
      },

      {
        test: /\.(css|less)$/,
        use: [MinCssExtractPlugin.loader, 'css-loader', 'less-loader'] //从后往前加载 先用css-loader解析css文件之后用style-loader将css放置到页面
      }
    ]
  },
  optimization: { //优化配置项
    minimizer: [
      new CssMinimizerPlugin()  //使用需要配合之mode为production
    ]
  }
}