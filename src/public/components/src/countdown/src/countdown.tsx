import React from 'react'

let interval: any = null

interface IProps {
  start: boolean,
  children (value: object): any
}

interface IState {
  currentTime: number,
  isFinish: boolean
}

export default class Countdown extends React.Component<IProps, IState> {
  state = {
    currentTime: 0,
    isFinish: true
  }

  countdown () {
    interval = setInterval(() => {
      if (this.state.currentTime > 1) {
        this.setState({
          currentTime: this.state.currentTime - 1
        })
      } else {
        this.finishCountdown()
      }
    }, 1000)
  }

  finishCountdown () {
    clearInterval(interval)
    this.setState({
      isFinish: true
    })
  }

  componentWillReceiveProps (props: any) {
    if (props.start && this.state.isFinish) {
      this.setState({
        currentTime: props.time,
        isFinish: false
      })
      this.countdown()
    } else {
      this.finishCountdown()
    }
  }

  render () {
    return (
      <div className="c-countdown">
        { this.props.children({ currentTime: this.state.currentTime, isFinish: this.state.isFinish }) }
      </div>
    )
  }
}

(Countdown as any).defaultProps = {
  start: false,
  time: 60
}
