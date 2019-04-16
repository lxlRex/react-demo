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

  touchmoveHandler = (e: any) => {
    if (!this.props.scroll) e.preventDefault()
  }

  render () {
    const { bgColor, maskClick = () => {}, children } = this.props

    return (
      <div className={'c-mask'}>
        <div className={'c-mask__bg'} style={{backgroundColor: bgColor}} />
        <div className={'c-mask__content'} ref={this.mask} onClick={maskClick}>{children}</div>
      </div>
    )
  }

  componentDidMount () {
    this.mask.current.addEventListener('touchmove', this.touchmoveHandler, { passive: false })
  }

  componentWillUnmount () {
    this.mask.current.removeEventListener('touchmove', this.touchmoveHandler)
  }
}
