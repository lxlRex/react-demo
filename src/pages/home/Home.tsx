import React, { Component } from 'react'
import ProcessDemo from './components/process-demo/index'

import Page from '../decorator/Page'

@Page({title: 'Process Demo', backgroundColor: '#f2f3f4', needLogin: false})
export default class Home extends Component {

  state = {
    buttons: [13,20,-7,-12],
    bars: [16,61,23],
    limit: 140
  }

  render () {
    let { buttons, bars, limit } = this.state

    return (
      <div className="home" style={{ paddingBottom: '200px' }}>
          <ProcessDemo buttons={buttons} bars={bars} limit={limit}/>
      </div>
    )
  }
}
