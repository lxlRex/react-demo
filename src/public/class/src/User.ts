// import { LOGIN_URL } from '@DEMO/config/pages'
import Utils from './Utils'

const USER_INFO = 'user_info'
export default class User {
  static userInfo: {
    token: string;
  } = {
    token: ''
  }

  /**
   * @desc 获取用户信息
   * @return {Object}
   */
  static getUserInfo () {
    return JSON.parse(localStorage.getItem(USER_INFO) || '{}')
  }

  /**
   * @desc 登录存入用户信息
   * @param userInfo {Object}
   */
  static login (userInfo: Object) {
    localStorage.setItem(USER_INFO, JSON.stringify(userInfo))
    Utils.mergeOwn(this, userInfo)
    return Promise.resolve(userInfo)
  }

  /**
   * @desc 清空UserInfo
   */
  static claerUserInfo () {
    localStorage.removeItem(USER_INFO)
  }

  /**
   * @desc 登出
   * @param {string} callBack 回调地址
   */
  static logout (callBack: string) {
    this.claerUserInfo()
    if (callBack) location.href = callBack
  }

  /**
   * @desc 是否登录
   * @return {Boolean}
   */
  static isLogin () {
    if (this.userInfo.token) {
      return true
    } else {
      let { token = false } = this.getUserInfo()
      return Boolean(token)
    }
  }

  /**
   * @desc 跳转登录页
   */
  static toLogin (backUrl = location.href) {
    // location.href = LOGIN_URL({backUrl})
  }
}
