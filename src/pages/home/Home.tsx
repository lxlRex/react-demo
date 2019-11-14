import React, { Component } from 'react'
import ProcessDemo from './components/process-demo/index'
import './home.scss'
import Page from '../decorator/Page'

@Page({title: 'Process Demo', backgroundColor: '#f2f3f4', needLogin: false})
export default class Home extends Component {

  render () {
    return (
      <div className="home" >
          <ProcessDemo />
      </div>
    )
  }
}
