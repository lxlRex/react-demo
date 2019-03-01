import React from 'react'
import PropTypes from 'prop-types'
import './radio.scss'

export default class Radio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: props.options.map(e => {
        return {
          ...e,
          checked: props.value === e.value
        }
      })
    }
  }

  clickHandler (index) {
    let newOptions = [].concat(this.state.options)
    if (newOptions[index].checked) return

    newOptions.map((e) => Object.assign(e, { checked: false }))
    newOptions[index].checked = true
    this.setState({
      options: newOptions
    })
    this.props.onChange && this.props.onChange(newOptions[index].value)
  }

  getClassName (checked) {
    return `c-radio__item ${checked ? 'c-radio__item--checked' : ''}`
  }

  render () {
    return (
      <div className="c-radio">
        {
          this.state.options.map(({ label, checked }, index) => {
            return (
              <div className={this.getClassName(checked)} key={index} onClick={this.clickHandler.bind(this, index)}>{label}</div>
            )
          })
        }
      </div>
    )
  }
}

Radio.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }))
}

Radio.defaultProps = {
  options: []
}
