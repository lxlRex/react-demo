'use strict'
const utils = require('./utils')
const config = require('../config')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

// const vendors = [
//   'react'
// ];

module.exports = merge(baseWebpackConfig, {
  mode: 'production',

  entry: {
    vendors: ['React', 'react-dom']
  },

  output: {
    path: path.join(__dirname, '../dll', 'dist'),
    filename: '[name].dll.js',
    library: '[name]',
  },

  optimization: {
    // minimize: true,
    minimizer: [
      new TerserPlugin(),
    ]
  },

  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../dll', '[name]-manifest.json'),
      name: '[name]',
    })
  ]
});
