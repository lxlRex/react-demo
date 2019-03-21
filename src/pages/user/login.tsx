import React, { Component } from 'react'
import Page from '../decorator/Page.js'
import Input from '../../public/components/src/input'

@Page({title: '登录'})
export default class Login extends Component {
  render() {
    return (
      <div>
        login
        <Input type="text" placeholder="账号" />
        <Input type="password" placeholder="密码" />
      </div>
    )
  }
}
