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
        clearInterval(interval)
        this.setState({
          isFinish: true
        })
      }
    }, 1000)
  }

  componentWillReceiveProps (props) {
    if (props.start) {
      this.setState({
        currentTime: props.time,
        isFinish: false
      })
      this.countdown()
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
