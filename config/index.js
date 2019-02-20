const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    devtool: 'eval-source-map',
    cssSourceMap: true,
    useEslint: true,
    showEslintErrorsInOverlay: false
  },

  build: {
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../dist'),
    devtool: 'none',
    bundleAnalyzerReport: true,
    productionSourceMap: false
  }
}
