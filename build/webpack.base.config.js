const path = require('path')
// const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('../config')
const utils = require('./utils')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|jsx)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src'),
      '@public': resolve('src/public')
    }
  },

  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.ts|.tsx$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader?cacheDirectory"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2048,
          quality: 70,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5120,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ],
  },

  plugins: []
}
