import React from 'react'
import PropTypes from 'prop-types'

interface IProps {
  start: boolean,
  children: (value: {currentTime: number; isFinish: boolean}) => any
}

interface IState {
  currentTime: number,
  isFinish: boolean
}

export default class Countdown extends React.Component<IProps, IState> {
  static propTypes = {
    start: PropTypes.bool,
    children: PropTypes.func
  }

  static defaultProps = {
    start: false,
    time: 60
  }

  interval: any = null

  state = {
    currentTime: 0,
    isFinish: true
  }

  countdown () {
    this.interval = setInterval(() => {
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
    clearInterval(this.interval)
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

  componentWillUnmount(): void {
    clearInterval(this.interval)
  }
}
