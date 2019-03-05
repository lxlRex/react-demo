import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './checkbox.scss'

export default class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: props.options.map(e => {
        return {
          ...e,
          checked: props.value.indexOf(e.value) > -1
        }
      })
    }
  }

  clickHandler (index) {
    let newOptions = [].concat(this.state.options)
    newOptions[index].checked = !newOptions[index].checked
    this.setState({
      options: newOptions
    })
    this.props.onChange && this.props.onChange(newOptions.filter(({ checked }) => checked).map(({ value }) => value))
    // this.setState(state => {
    //   state.options[index].checked = !state.options[index].checked
    //
    //   this.props.onChange && this.props.onChange(state.options.filter(({ checked }) => checked).map(({ value }) => value))
    //   return {
    //     options: state.options
    //   }
    // })
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

Checkbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })),
  value: PropTypes.array
}

Checkbox.defaultProps = {
  options: [],
  value: []
}
