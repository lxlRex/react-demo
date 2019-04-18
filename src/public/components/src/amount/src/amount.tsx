import React from 'react'

interface IProps {
  value: number,
  from?: number
}

interface IState {
  from: number,
  to: number
}

export default class Amount extends React.Component<IProps, IState> {
  private timer: any;

  constructor (props: any) {
    super(props)

    this.state = {
      from: this.props.from || 0,
      to: this.props.value
    }
  }

  numChange () {
    let sub = this.state.to - this.state.from
    if (sub !== 0) {
      this.setState({from: sub > 0 ? this.state.from + 1 : this.state.from - 1})
    } else {
      this.timer && clearInterval(this.timer)
    }
  }

  start () {
    let sub = this.state.to - this.state.from
    this.timer = setInterval(this.numChange.bind(this), 300 / Math.abs(sub))
  }

  render () {
    return (
      <span>{this.state.from}</span>
    )
  }

  componentDidMount(): void {
    this.start()
  }

  componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    this.setState({from: this.state.to, to: nextProps.value}, this.start)
  }
}
