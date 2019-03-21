const path = require('path')

module.exports = {
  dev: {
    assetsPublicPath: '/',
    host: '0.0.0.0',
    port: 8808,
    assetsSubDirectory: 'static',
    devtool: 'eval-source-map',
    cssSourceMap: true,
    useEslint: false,
    showEslintErrorsInOverlay: false
  },

  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../dist'),
    devtool: 'none',
    bundleAnalyzerReport: false,
    productionSourceMap: false
  }
}
