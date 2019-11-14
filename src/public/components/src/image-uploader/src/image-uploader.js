import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import uuid from '../../../utils/uuid';
import { compressImages } from '../../../utils/image-processor';
import './image-uploader.scss';
export default class ImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerValue: Array.isArray(props.value) ? props.value : props.value ? [props.value] : [],
            uid: 'image-choice-' + uuid()
        };
    }
    removeHandler(index) {
        let newData = this.state.innerValue.filter((o, i) => i !== index);
        this.setState({ innerValue: newData });
        this.props.onChange && this.props.onChange(newData);
    }
    async changeHandler(e) {
        console.log(e);
        e.persist();
        let files = e.target.files;
        let compressFiles = await compressImages(files);
        compressFiles.forEach(async ({ compressFile = '', name = '' }) => {
            let fd = new FormData();
            fd.append('imgFile', compressFile, name);
            let { data: { data } } = await axios.post(this.props.action, fd);
            let newData = this.state.innerValue.concat(data);
            this.setState({
                innerValue: newData
            });
            this.props.onChange && this.props.onChange(newData);
        });
        e.target.value = null;
    }
    render() {
        return (React.createElement("div", { className: "image-choice" },
            this.state.innerValue.map((item, index) => {
                return (React.createElement("div", { className: "image-choice__item", key: index },
                    React.createElement("div", { className: "image-choice__remove", onClick: this.removeHandler.bind(this, index) }),
                    React.createElement("img", { className: "image-choice__img", src: item })));
            }),
            this.state.innerValue.length < this.props.size &&
                React.createElement("div", { className: "image-choice__item image-choice__item--add" },
                    React.createElement("input", { id: this.state.uid, type: "file", accept: "image/*", size: this.props.size, multiple: this.props.multiple, onChange: this.changeHandler.bind(this) }),
                    React.createElement("label", { htmlFor: this.state.uid },
                        React.createElement("div", { className: "image-choice__icon" }, "+"),
                        React.createElement("div", { className: "image-choice__prompt" }, this.props.prompt)))));
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
};
ImageUploader.defaultProps = {
    value: [],
    prompt: '上传图片',
    size: 8,
    action: '//order-api.tychou.com/common/private/image/uploadPictureAndThumbnail.do',
    multiple: false
};
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
