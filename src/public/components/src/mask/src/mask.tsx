import React from 'react'
import { lock, unlock } from 'tua-body-scroll-lock'
import './mask.scss'

interface IProps {
  // scroll?: boolean
  bgColor?: string
  maskClick? (): void
}

export default class Mask extends React.Component<IProps> {
  static defaultProps = {
    // scroll: false,
    bgColor: 'rgba(0, 0, 0, .5)'
  }

  private readonly mask: React.RefObject<any>

  constructor (props: any) {
    super(props)

    this.mask = React.createRef()
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
    lock(this.mask.current)
  }

  componentWillUnmount () {
    unlock(this.mask.current)
  }
}
