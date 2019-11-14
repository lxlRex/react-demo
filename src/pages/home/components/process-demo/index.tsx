import React, { Component } from 'react'
import ProcessBar from '../process-bar'
import Button from '../../../../public/components/src/button'
import './index.scss'

interface IProps {
  buttons: number[],
  bars: number[],
  limit: number
}

export default class extends Component<IProps> {
  render () {
    const { buttons, bars, limit } = this.props

    return (
      <div className={'process-demo'}>
        <div>Process Bars Demo</div>
        {
          bars.map((e, index) =>{
            return (
              <div key={index}>
                  <ProcessBar value={e} />
              </div>
            )
          })
        }

        <div className={'button-box'}>
          {
            buttons.map((e, index) => {
              return (<div key={index}><Button>{e}</Button></div>)
            })
          }
        </div>
      </div>
    )
  }
}