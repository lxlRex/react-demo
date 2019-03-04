import React from 'react'

export default class Countdown extends React.Component {
  render () {
    return (
      <div>
        {React.cloneElement(this.props.children, { column: 1 })}
      </div>
    )
  }
}
