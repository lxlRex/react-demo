import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './checkbox.scss'

interface IMyComponentProps  {
  options: Array<any>,
  onChange(arg: Array<string | number>): void
}

interface IMyComponentState {
  options: Array<any>
}

export default class Checkbox extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor (props: any) {
    super(props)
    this.state = {
      options: props.options.map((e: { value: any }) => {
        return {
          ...e,
          checked: props.value.indexOf(e.value) > -1
        }
      })
    }
  }

  clickHandler (index: number) {
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

(Checkbox as any).propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })),
  value: PropTypes.array
};

(Checkbox as any).defaultProps = {
  options: [],
  value: []
}
