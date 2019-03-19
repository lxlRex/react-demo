const path = require('path')

module.exports = {
  dev: {
    host: '0.0.0.0',
    port: 8808,
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
