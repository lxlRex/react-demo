const u = navigator.userAgent
// const app = navigator.appVersion

export default {
  // 内核
  Trident: u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
  Presto: u.indexOf('Presto') > -1,
  WebKit: u.indexOf('AppleWebKit') > -1,
  Gecko: u.indexOf('Gecko/') > -1,
  // 浏览器
  Safari: u.indexOf('Safari') > -1,
  Chrome: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
  IE: u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
  Edge: u.indexOf('Edge') > -1,
  Firefox: u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
  QQ: u.indexOf('QQ/') > -1,
  Wechat: u.indexOf('MicroMessenger') > -1,
  QQBrowse: u.indexOf('MQQBrowser') > -1,
  Taobao: u.indexOf('AliApp(TB') > -1,
  Alipay: u.indexOf('AliApp(AP') > -1,
  Weibo: u.indexOf('Weibo') > -1,
  Douban: u.indexOf('com.douban.frodo') > -1,
  // 系统或平台
  Android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
  iOS: u.indexOf('like Mac OS X') > -1,
  ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), // ios终端
  iPad: u.indexOf('ipad') > -1, // 是否iPad
  iPhone: u.indexOf('iphone') > -1, // 是否为iPhone
  Windows: u.indexOf('Windows') > -1,
  Linux: u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
  MacOS: u.indexOf('Macintosh') > -1,
  Ubuntu: u.indexOf('Ubuntu') > -1,
  WindowsPhone: u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
  // 设备
  Mobile: u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
  Tablet: u.indexOf('Tablet') > -1 || u.indexOf('Pad') > -1 || u.indexOf('Nexus 7') > -1
}
