'use strict'
const path = require('path')
const devEnv = require('./dev.env')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: devEnv.OPEN_PROXY === false ? {} : {
      '/proxyApi': {
        target: 'http://demo.renren.io/renren-fast/',
        changeOrigin: true,
        pathRewrite: {
          '^/proxyApi': '/'
        }
      }
    },
    // 本地IP
    host: 'localhost',
    // 本地端口
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'eval-source-map',
    cacheBusting: true,
    cssSourceMap: false
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
