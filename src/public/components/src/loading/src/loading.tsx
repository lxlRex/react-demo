import React from 'react'
import Mask from '../../mask'
import './loading.scss'

export default class Loading extends React.Component {
  state = {
    show: false
  }

  render () {
    return (
      <Mask show={this.state.show} display={false}>
        <div className="loading">
          <em className="loading__img"/>
        </div>
      </Mask>
    )
  }
}
