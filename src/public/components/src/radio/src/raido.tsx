import React from 'react'
import classNames from 'classnames'
// import PropTypes from 'prop-types'
import './radio.scss'

interface Options {
  label: string,
  value: string | number,
  checked?: boolean
}

interface IProps {
  options: Array<Options>,
  value: string | number,
  onChange? (value: string | number): void
}

interface IState {
  options: Array<Options>
}

export default class Radio extends React.Component<IProps, IState> {
  constructor (props: any) {
    super(props)
    this.state = {
      options: props.options.map((e: Options) => ({
        ...e,
        checked: props.value === e.value
      }))
    }
  }

  clickHandler (index: number) {
    if (this.state.options[index].checked) return

    let newOptions = this.state.options.map(e => ({...e, checked: false}))
    newOptions[index].checked = true
    this.setState({
      options: newOptions
    })
    this.props.onChange && this.props.onChange(newOptions[index].value)
  }

  render () {
    return (
      <div className="c-radio">
        {
          this.state.options.map(({ label, checked }, index) => {
            return (
              <div className={classNames('c-radio__item', { 'c-radio__item--checked': checked })} key={index} onClick={this.clickHandler.bind(this, index)}>{label}</div>
            )
          })
        }
      </div>
    )
  }
}
