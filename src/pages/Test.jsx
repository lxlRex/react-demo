import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTest } from '@/redux/actions/testAction'

class Test extends Component {
  clickHandler () {
    this.props.fetchTest()
  }

  render () {
    return (
      <div onClick={this.clickHandler.bind(this)}>this is test~asdasda1111123213</div>
    )
  }
}

const mapStateToProps = state => ({
  test: state.test.items
})

export default connect(mapStateToProps, { fetchTest })(Test)
