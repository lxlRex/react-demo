import React from 'react'
import Mask from '../../mask/index'
import './loading.scss'
import { CSSTransition } from 'react-transition-group'
import '../../../animation/fade.css'

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
      <CSSTransition
        in={this.state.show}
        classNames={'fade'}
        timeout={300}
        unmountOnExit>
        <Mask show bgColor={'transparent'}>
          <div className="loading">
            <em className="loading__img"/>
          </div>
        </Mask>
      </CSSTransition>
    )
  }
}
