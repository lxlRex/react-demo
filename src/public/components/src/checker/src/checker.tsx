import React from 'react'
import classNames from 'classnames'
import './checker.scss'

interface IProps {
  onChange (value: boolean): void
}

interface IState {
  checked: boolean
}

export default class Checker extends React.Component<IProps, IState> {
  static defaultProps = {
    value: false
  }

  constructor (props: any) {
    super(props)
    this.state = {
      checked: props.value
    }
  }

  clickHandler () {
    this.setState({ checked: !this.state.checked })
    this.props.onChange && this.props.onChange(!this.state.checked)
  }

  render () {
    return (
      <div className="c-checker">
        <div className={classNames('c-checker__normal', { 'c-checker__normal--checked': this.state.checked })} onClick={this.clickHandler.bind(this)}/>
        <div className="c-checker__text">
          { this.props.children }
        </div>
      </div>
    )
  }
}
