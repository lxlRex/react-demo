import React, { Component } from 'react'
import ProcessBar from '../process-bar'
import Button from '../../../../public/components/src/button'
import './index.scss'

interface IState {
  buttons: number[],
  bars: number[],
  limit: number,
  selected: number
}

export default class extends Component<{}, IState> {
  state = {
    buttons: [13, 20, -7, -12],
    bars: [16, 61, 23],
    limit: 140,
    selected: 0
  }

  selectChangeHandler = (e: any): void => {
    this.setState({selected: e.target.value})
  }

  buttonClickHander = (e: number) => {
    let { bars, selected, limit } = this.state

    bars[selected] = bars[selected] + e

    if (bars[selected] < 0) bars[selected] = 0
    if (bars[selected] > limit) bars[selected] = limit

    this.setState({ bars })
  }

  render () {
    let { buttons, bars, limit } = this.state

    return (
      <div className={'process-demo'}>
        <div>Process Bars Demo</div>
        {
          bars.map((e, index) =>{
            return (
              <div key={index}>
                <ProcessBar value={e} limit={limit}/>
              </div>
            )
          })
        }

        <div className={'button-box'}>
          <select name="process" className={'process-select'} onChange={this.selectChangeHandler}>
            {
              bars.map((e, index) => {
                return (
                  <option value={index}>
                    #process{index + 1}
                  </option>
                )
              })
            }
          </select>

          {
            buttons.map((e, index) => {
              return (<div key={index}><Button onClick={() => this.buttonClickHander(e)}>{e}</Button></div>)
            })
          }
        </div>
      </div>
    )
  }
}