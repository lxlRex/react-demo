import React, { Component } from 'react'
import './home.css'
import './home.scss'
import Button from '@public/components/button'
import Input from '@public/components/input'
import Textarea from '@public/components/textarea'
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
    console.log(this.input.value)
  }

  inputChangeHandler (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div className="home">
        {this.state.title}
        <div className="home__text">
          this is home~123
        </div>
        <Input name="title" showClear label="姓名姓名" placeholder="请输入姓名姓名" type="text" value={this.state.title} onChange={this.inputChangeHandler.bind(this)}/>
        <input name="title" ref={input => { this.input = input }} type="text" value={this.state.title} onChange={this.inputChangeHandler.bind(this)}/>
        <Button onClick={this.buttonClickHandler.bind(this)}>啊阿萨德</Button>
        <Textarea name="desc" value={this.state.desc} onChange={this.inputChangeHandler.bind(this)} showCount maxlength="20"/>
      </div>
    )
  }

  componentDidMount () {
    console.log(123)
  }

  componentWillUpdate () {
  }

  componentDidUpdate () {
  }
}
