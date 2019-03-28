const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.config')
const config = require('../config')
const utils = require('./utils')

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode:  'production',

  // entry: path.resolve(__dirname, '../src/
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },

  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
  },

  optimization: {
    // minimize: true,
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: false
      // }),
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'all'
      // chunks: 'all',
      // minSize: 30000,
      // maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // cacheGroups: {
      //   vendor: {
      //     test: /react/, // 直接使用 test 来做路径匹配
      //     chunks: "initial",
      //     enforce: true,
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true
      //   }
      // }
    }
  },

  devtool: config.build.devtool,

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
          NODE_ENV: 'production'
        }
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash].css'),
      allChunks: true
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  prodWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = prodWebpackConfig
