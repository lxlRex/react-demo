import React, { Component } from 'react'
import './home.css'
import './home.scss'
import Button from '@public/components/button'
import Input from '@public/components/input'
import Textarea from '@public/components/textarea'
import Loading, { showLoading, hideLoading } from '@public/components/loading'
// import { Button } from 'element-react'
import moment from 'moment'

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
    hideLoading()
    console.log(this.input.value)
  }

  buttonClickHandler2 () {
    showLoading()

    setTimeout(hideLoading, 10000)
  }

  inputChangeHandler (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div className="home">
        {this.state.title}
        <Input name="title" showClear label="姓名姓名" placeholder="请输入姓名姓名" type="text" value={this.state.title} onChange={this.inputChangeHandler.bind(this)}/>
        <input name="title" ref={input => { this.input = input }} type="text" value={this.state.title} onChange={this.inputChangeHandler.bind(this)}/>
        <Button onClick={this.buttonClickHandler.bind(this)}>啊阿萨德</Button>
        <Button onClick={this.buttonClickHandler2.bind(this)}>showLoading</Button>
        <Textarea name="desc" value={this.state.desc} onChange={this.inputChangeHandler.bind(this)} showCount maxlength="20"/>
      </div>
    )
  }

  componentDidMount () {
    alert(moment('2015-01-02'))
  }

  componentWillUpdate () {
  }

  componentDidUpdate () {
  }
}
