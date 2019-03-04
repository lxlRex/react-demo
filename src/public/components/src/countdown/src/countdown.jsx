import React from 'react'
import PropTypes from 'prop-types'

let interval = null

export default class Countdown extends React.Component {
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

  componentWillReceiveProps (props) {
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

Countdown.propTypes = {
  start: PropTypes.bool,
  time: PropTypes.number,
  children: PropTypes.func.isRequired
}

Countdown.defaultProps = {
  start: false,
  time: 60
}
