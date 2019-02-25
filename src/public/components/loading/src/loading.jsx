import React from 'react'
import PropTypes from 'prop-types'
import './loading.scss'

export default class Loading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }
  //
  // showLoading () {
  //   this.setState({ show: true })
  // }
  //
  // hideLoading () {
  //   this.setState({ show: false })
  // }

  render () {
    return (
      <div className={ this.state.show ? 'loading loading--show' : 'loading' }>
        <em className="loading__img"/>
      </div>
    )
  }
}

Loading.propTypes = {
  show: PropTypes.bool
}

Loading.defaultTypes = {
  show: false
}
