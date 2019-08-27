import React from 'react'
import classNames from 'classnames'
// import PropTypes from 'prop-types'
import './checkbox.scss'

interface Options {
  label: string,
  value: number | string,
  checked?: boolean
}

interface IMyComponentProps  {
  options: Options[],
  value: Array<string | number>,
  onChange (arg: Array<string | number>): void
}

interface IMyComponentState {
  options: Options[]
}

export default class Checkbox extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor (props: IMyComponentProps) {
    super(props)
    this.state = {
      options: props.options.map((e: Options) => ({...e, checked: props.value.indexOf(e.value) > -1}))
    }
  }

  clickHandler (index: number): void {
    let newOptions = this.state.options.slice(0)
    newOptions[index].checked = !newOptions[index].checked
    this.setState({
      options: newOptions
    })
    this.props.onChange && this.props.onChange(newOptions.filter(({ checked }) => checked).map(({ value }) => value))
  }

  render () {
    return (
      <div className="c-checkbox">
        {
          this.state.options.map(({ label, checked }, index) => {
            return (
              <div className={classNames('c-checkbox__item', { 'c-checkbox__item--checked': checked })} key={index} onClick={this.clickHandler.bind(this, index)}>{label}</div>
            )
          })
        }
      </div>
    )
  }
}
