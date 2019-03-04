import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import uuid from '../../../utils/uuid'
import { compressImages } from '../../../utils/image-processor'
import './image-uploader.scss'

export default class ImageUploader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      innerValue: Array.isArray(props.value) ? props.value : props.value ? [props.value] : [],
      uid: uuid()
    }
  }

  removeHandler (index) {
    let newData = this.state.innerValue.filter((o, i) => i !== index)
    this.setState({ innerValue: newData })
    this.props.onChange && this.props.onChange(newData)
  }

  async changeHandler (e) {
    console.log(e)
    e.persist()
    let files = e.target.files
    let compressFiles = await compressImages(files)

    compressFiles.forEach(async ({ compressFile, name }) => {
      let fd = new FormData()
      fd.append('imgFile', compressFile, name)
      let { data: { data } } = await axios.post(this.props.action, fd)

      let newData = [].concat(this.state.innerValue, data)
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
            <input id={`image-choice-${this.state.uid}`} type="file" accept="image/*"
              size={this.props.size}
              multiple={this.props.multiple}
              onChange={this.changeHandler.bind(this)}
            />
            <label htmlFor={`image-choice-${this.state.uid}`}>
              <div className="image-choice__icon">+</div>
              <div className="image-choice__prompt">{this.props.prompt}</div>
            </label>
          </div>
        }
      </div>
    )
  }
}

ImageUploader.propTypes = {
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

ImageUploader.defaultProps = {
  value: [],
  prompt: '上传图片',
  size: 8,
  action: '//order-api.tychou.com/common/private/image/uploadPictureAndThumbnail.do',
  multiple: false
}
