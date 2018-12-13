const time = new Date().getTime();
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: ['./main.js', 'babel-polyfill']
  },
  output: {
    publicPath: "", // 服务器域名
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].' + time + '.js'
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, 'dist')
    }),
    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      favicon: '',
      title: 'yueyueg-webpack', //用于生成的HTML文档的标题
      filename: 'index.html', //默认为index.html。可以在这里指定一个子目录（如：assets/admin.html）
      inject: true, //true || 'head' || 'body' || false将所有资产注入给定template或templateContent。传递true或'body'所有javascript资源将被放置在body元素的底部。'head'将脚本放在head元素中
      template: './index.html',
      // templateParameters: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname)
    }
  }
}

console.log(">>>>>>>>>>>>>>" + path.join(__dirname, './dist'));