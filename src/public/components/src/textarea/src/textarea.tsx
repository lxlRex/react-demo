import React from 'react'
import Autosize from 'autosize'
import PropTypes from 'prop-types'
import './textarea.scss'

interface IProps {
  value: string
  name: string
  maxlength: number
  showCount: boolean
  placeholder?: string
  onChange (e: any): void
}

interface IState {
  count: number
}

export default class Textarea extends React.Component<IProps, IState> {
  static propTypes = {
    maxlength: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    showCount: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    showCount: false,
    placeholder: '请输入',
    value: ''
  }

  private readonly textarea: React.RefObject<any>

  constructor (props: any) {
    super(props)

    this.textarea = React.createRef()
    this.state = {
      count: props.value.length || 0
    }
  }

  bindAutosize () { Autosize(this.textarea.current) }

  updateAutoSize () { Autosize.update(this.textarea.current) }

  unbindAutosize () { Autosize.destroy(this.textarea.current) }

  changeHandler (e: any) {
    this.updateAutoSize()
    this.setState({
      count: e.target.value.length
    })
    this.props.onChange && this.props.onChange(e)
  }

  render () {
    return (
      <div className="c-textarea">
        <textarea className="c-textarea__entity" ref={this.textarea}
          value={this.props.value}
          name={this.props.name}
          maxLength={this.props.maxlength}
          placeholder={this.props.placeholder}
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
