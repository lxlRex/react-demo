import React, { Component } from 'react'
import './home.css'
import './home.scss'
import Button from '@public/components/button'
import Input from '@public/components/input'
import Textarea from '@public/components/textarea'
import Loading from '@public/components/loading'
import MessageBox from '@public/components/messageBox'
// import { Button } from 'element-react'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      title: 'hello world',
      desc: '12312'
    }
  }

  componentWillMount () {
  }

  buttonClickHandler () {
    Loading.hide()
    console.log(this.input.value)
  }

  buttonClickHandler2 () {
    Loading.show()

    setTimeout(Loading.hide, 3000)
  }

  inputChangeHandler (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  alertHandler () {
    MessageBox.alert({
      msg: '123',
      btnText: '阿萨德'
    }).then(() => {
      console.log(12323)
    })
  }

  confirmHandler () {
    MessageBox.confirm({
      msg: '阿斯蒂芬的',
      confirmBtn: '请问',
      cancelBtn: '按时'
    }).then(() => {
      console.log('confirm')
    }).catch(() => {
      console.log('cancel')
    })
  }

  render () {
    return (
      <div className="home">
        {this.state.title}
        <Input name="title" showClear label="姓名姓名" placeholder="请输入姓名姓名" type="text" value={this.state.title} onChange={this.inputChangeHandler.bind(this)}/>
        <input name="title" ref={input => { this.input = input }} type="text" value={this.state.title} onChange={this.inputChangeHandler.bind(this)}/>
        <Button onClick={this.buttonClickHandler.bind(this)}>啊阿萨德</Button>
        <Button onClick={this.buttonClickHandler2.bind(this)}>showLoading</Button>
        <Button onClick={this.alertHandler.bind(this)}>alert</Button>
        <Button onClick={this.confirmHandler.bind(this)}>confirm</Button>
        <Textarea name="desc" value={this.state.desc} onChange={this.inputChangeHandler.bind(this)} showCount maxlength="20"/>
      </div>
    )
  }

  componentDidMount () {
  }

  componentWillUpdate () {
  }

  componentDidUpdate () {
  }
}
