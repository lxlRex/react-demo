import React, { Component } from 'react'
import Page from '../decorator/Page.js'

@Page({title: '登录'})
export default class Login extends Component {
  render() {
    return (
      <div>
        login
      </div>
    )
  }
}
