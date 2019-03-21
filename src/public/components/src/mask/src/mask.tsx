import React from 'react'
import classNames from 'classnames'
import './mask.scss'

interface IProps {
  scroll?: boolean
  display: boolean
  show: boolean
  maskClick? (): void
}

export default class Mask extends React.Component<IProps> {
  static defaultProps = {
    show: false,
    display: true,
    scroll: false
  }

  private mask: any

  clickHandler () {
    this.props.maskClick && this.props.maskClick()
  }

  touchmoveHandler (e: any) {
    if (!this.props.scroll) e.preventDefault()
  }

  render () {
    return (
      <div className={classNames('c-mask', { 'c-mask--display': this.props.display, 'c-mask--hide': !this.props.show })}
        ref={mask => { this.mask = mask }}
        onClick={this.clickHandler.bind(this)}
      >
        {this.props.children}
      </div>
    )
  }

  componentDidMount () {
    this.mask.addEventListener('touchmove', this.touchmoveHandler.bind(this), { passive: false })
  }

  componentWillUnmount () {
    this.mask.removeEventListener('touchmove', this.touchmoveHandler.bind(this))
  }
}
