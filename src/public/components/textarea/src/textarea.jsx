import React from 'react'
import PropTypes from 'prop-types'
import Autosize from 'autosize'
import './textarea.scss'

export default class Textarea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  bindAutosize () { Autosize(this.textarea) }

  updateAutoSize () { Autosize.update(this.textarea) }

  unbindAutosize () { Autosize.destroy(this.textarea) }

  changeHandler (e) {
    this.updateAutoSize()
    this.setState({
      count: e.target.value.length
    })
    this.props.onChange && this.props.onChange(e)
  }

  render () {
    return (
      <div className="c-textarea">
        <textarea className="c-textarea__entity" ref={textarea => (this.textarea = textarea)}
          value={this.props.value}
          maxLength={this.props.maxlength}
          onChange={this.changeHandler.bind(this)}
        />
        { (this.props.showCount && this.props.maxlength) && <div className="c-textarea__count">{this.state.count}/{this.props.maxlength}</div> }
      </div>
    )
  }

  componentDidMount () {
    this.bindAutosize()
  }

  componentWillUnmount () {
    this.unbindAutosize()
  }
}

Textarea.propTypes = {
  maxlength: PropTypes.number,
  showCount: PropTypes.bool,
  onChange: PropTypes.func
}

Textarea.defaultProps = {
  showCount: false
}
