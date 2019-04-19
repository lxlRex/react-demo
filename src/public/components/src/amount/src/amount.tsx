import React from 'react'

interface IProps {
  value: number,
  from?: number
}

export default class Amount extends React.Component<IProps> {

  static defaultProps = {
    from: 0
  }

  private timer: any

  private current = 0

  private readonly amount: React.RefObject<any>

  constructor (props: any) {
    super(props)

    this.amount = React.createRef()
  }

  numChange = () => {
    const { from = 0, value } = this.props
    this.current = from

    this.timer = setInterval(() => {
      let sub = value - this.current

      if (sub !== 0) {
        this.amount.current.innerHTML = sub > 0 ? ++this.current : --this.current
      } else {
        clearInterval(this.timer)
      }
    }, 1)
  }

  render () {
    return (
      <span ref={this.amount} />
    )
  }

  componentDidMount(): void {
    this.numChange()
  }

  componentWillReceiveProps(): void {
    this.numChange()
  }
}
