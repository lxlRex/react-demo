import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import uuid from '../../../utils/uuid'
import { compressImages } from '../../../utils/image-processor'
import './image-uploader.scss'

interface IProps {
  action: string,
  prompt: string,
  size: number,
  multiple: boolean,
  value: string[] | string,
  onChange (value: string[]): void,
}

interface IState {
  innerValue: string[],
  uid: string
}

export default class ImageUploader extends React.Component<IProps, IState> {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),
    prompt: PropTypes.string,
    multiple: PropTypes.bool,
    size: PropTypes.number,
    onChange: PropTypes.func,
    action: PropTypes.string
  }

  static defaultProps = {
    value: [],
    prompt: '上传图片',
    size: 8,
    action: '//order-api.tychou.com/common/private/image/uploadPictureAndThumbnail.do',
    multiple: false
  }

  constructor (props: any) {
    super(props)
    this.state = {
      innerValue: Array.isArray(props.value) ? props.value : props.value ? [props.value] : [],
      uid: 'image-choice-' + uuid()
    }
  }

  removeHandler (index: number) {
    let newData = this.state.innerValue.filter((o, i) => i !== index)
    this.setState({ innerValue: newData })
    this.props.onChange && this.props.onChange(newData)
  }

  async changeHandler (e: any) {
    console.log(e)
    e.persist()
    let files = e.target.files
    let compressFiles = await compressImages(files)

    compressFiles.forEach(async ({ compressFile = '', name = ''}) => {
      let fd = new FormData()
      fd.append('imgFile', compressFile, name)
      let { data: { data } } = await axios.post(this.props.action, fd)

      let newData = this.state.innerValue.concat(data)

      this.setState({
        innerValue: newData
      })

      this.props.onChange && this.props.onChange(newData)
    })

    e.target.value = null
  }

  render () {
    return (
      <div className="image-choice">
        {
          this.state.innerValue.map((item, index) => {
            return (
              <div className="image-choice__item" key={index}>
                <div className="image-choice__remove" onClick={this.removeHandler.bind(this, index)} />
                <img className="image-choice__img" src={item} />
              </div>
            )
          })
        }

        {
          this.state.innerValue.length < this.props.size &&
          <div className="image-choice__item image-choice__item--add">
            <input id={this.state.uid} type="file" accept="image/*"
              size={this.props.size}
              multiple={this.props.multiple}
              onChange={this.changeHandler.bind(this)}
            />
            <label htmlFor={this.state.uid}>
              <div className="image-choice__icon">+</div>
              <div className="image-choice__prompt">{this.props.prompt}</div>
            </label>
          </div>
        }
      </div>
    )
  }
}
// ImageUploader.propTypes = {
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.array
//   ]),
//   prompt: PropTypes.string,
//   multiple: PropTypes.bool,
//   size: PropTypes.number,
//   onChange: PropTypes.func,
//   action: PropTypes.string
// }

// (ImageUploader as any).defaultProps = {
//   value: [],
//   prompt: '上传图片',
//   size: 8,
//   action: '//order-api.tychou.com/common/private/image/uploadPictureAndThumbnail.do',
//   multiple: false
// }
