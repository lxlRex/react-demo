import React, { Component } from 'react'
import './home.css'
import './home.scss'
import Button from '@/public/components/button'
// import { Button } from 'element-react'

export default class Home extends Component {
  componentWillMount () {
  }

  buttonClickHandler () {
    alert(123)
  }

  render () {
    return (
      <div className="home">
        qweqeqw
        <div className="home__text">
          this is home~123
        </div>
        <Button disabled onClick={this.buttonClickHandler.bind(this)}>啊阿萨德</Button>
      </div>
    )
  }
}
