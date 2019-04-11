import React from 'react'
import Mask from '../../mask/index'
import './loading.scss'

export default class Loading extends React.Component {
  state = {
    show: false
  }

  constructor (props: any) {
    super(props)
  }

  isShow = () => {
    return this.state.show
  }

  show = () => {
    this.setState({show: true})
  }

  hide = () => {
    this.setState({show: false})
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
