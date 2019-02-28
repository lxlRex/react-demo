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
      innerValue: Array.isArray(this.props.value) ? this.props.value : this.props.value ? [this.props.value] : [],
      uid: uuid()
    }
  }

  removeHandler (index) {
    this.setState({ innerValue: this.state.innerValue.filter((o, i) => i !== index) })
    this.props.onChange && this.props.onChange(this.state.innerValue)
  }

  async changeHandler (e) {
    console.log(e)
    e.persist()
    let files = e.target.files
    let compressFiles = await compressImages(files)

    compressFiles.forEach(async ({ compressFile, name }) => {
      let fd = new FormData()
      fd.append('imgFile', compressFile, name)
      let { data: { data } } = await axios.post('//order-api.tychou.com/common/private/image/uploadPictureAndThumbnail.do', fd)
      this.setState({
        innerValue: [].concat(this.state.innerValue, data)
      })
    })

    e.target.value = null

    this.props.onChange && this.props.onChange(this.state.innerValue)
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
  url: PropTypes.string
}

ImageUploader.defaultProps = {
  size: 8
}
