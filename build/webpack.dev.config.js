const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.config')
const config = require('../config')
const utils = require('./utils')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',

  // entry: path.resolve(__dirname, '../src/main.ts'),
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },

  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: '/'
  },

  devtool: config.dev.devtool,

  // 配置webpakc开发服务功能
  devServer: {
    host: utils.getLocalAddress() || config.dev.host,
    port: config.dev.port,
    compress: true,
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      poll: false
    },
    // quiet: true,
    // noInfo: true
    stats: 'errors-only'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      },
      process: {
        env: {
          NODE_ENV: 'development'
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = devWebpackConfig
