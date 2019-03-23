import React, { Component } from 'react'
import Page from '../decorator/Page'
import Input from '../../public/components/src/input'
import Button from '../../public/components/src/button'

import { login } from '../../api/user'
import { User } from '../../public/class'
// import '../home.scss'
// interface IState {
//   userName: string
//   password: string
// }

@Page({title: '登录'})
export default class Login extends Component<any, any> {
  state = {
    userName: '',
    password: ''
  }

  inputChangeHandler (e: any) {
    this.setState({ [e.target.name]: e.target.value })
  }

  async login () {
    let {data} = await login(this.state)

    await User.login(data)

    // if (this.$route.query.backUrl) {
    //   location.href = decodeURIComponent(this.$route.query.backUrl)
    // } else {
    //   this.$router.push({name: 'Home'})
    // }
  }

  render() {
    return (
      <div>
        <div className="login">login</div>
        <Input name="userName" value={this.state.userName} type="text" placeholder="账号" onChange={this.inputChangeHandler.bind(this)} />
        <Input name="password" value={this.state.password} type="password" placeholder="密码" onChange={this.inputChangeHandler.bind(this)} />
        <Button onClick={this.login.bind(this)}>login</Button>
      </div>
    )
  }
}
