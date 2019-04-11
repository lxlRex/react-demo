import React from 'react'
import './mask.scss'

interface IProps {
  scroll?: boolean
  bgColor?: string
  maskClick? (): void
}

export default class Mask extends React.Component<IProps> {
  static defaultProps = {
    scroll: false,
    bgColor: 'rgba(0, 0, 0, .5)'
  }

  private readonly mask: React.RefObject<any>

  constructor (props: any) {
    super(props)

    this.mask = React.createRef()
  }

  clickHandler () {
    this.props.maskClick && this.props.maskClick()
  }

  touchmoveHandler (e: any) {
    if (!this.props.scroll) e.preventDefault()
  }

  render () {
    const { bgColor } = this.props

    return (
      <div className={'c-mask'}
        ref={this.mask}
        style={{backgroundColor: bgColor}}
        onClick={this.clickHandler.bind(this)}
      >
        {this.props.children}
      </div>
    )
  }

  componentDidMount () {
    this.mask.current.addEventListener('touchmove', this.touchmoveHandler.bind(this), { passive: false })
  }

  componentWillUnmount () {
    this.mask.current.removeEventListener('touchmove', this.touchmoveHandler.bind(this))
  }
}
