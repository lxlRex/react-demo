import React, { Component } from 'react'
import './home.css'
import './home.scss'
import Button from '@public/components/button'
import Input from '@public/components/input'
// import { Button } from 'element-react'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      title: 'hello world'
    }
  }

  componentWillMount () {
  }

  buttonClickHandler () {
    console.log(this.input.value)
  }

  inputChangeHandler (term, e) {
    let obj = {}
    obj[term] = e.target.value
    this.setState(obj)
  }

  getInput (term, val) {
    let obj = {}
    obj[term] = val
    this.setState(obj)
  }

  render () {
    return (
      <div className="home">
        {this.state.title}
        <div className="home__text">
          this is home~123
        </div>
        <Input value={this.state.title} onChange={e => this.getInput('title', e)}/>
        <input ref={input => { this.input = input }} type="text" value={this.state.title} onChange={e => this.inputChangeHandler('title', e)}/>
        <Button onClick={this.buttonClickHandler.bind(this)}>啊阿萨德</Button>
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
