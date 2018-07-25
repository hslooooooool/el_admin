/**
 * 测试环境
 */
(function () {
  window.SITE_CONFIG = {}

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://demo.renren.io/renren-fast'

  // cdn地址
  window.SITE_CONFIG['domain'] = './'
  window.SITE_CONFIG['version'] = ''
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()
