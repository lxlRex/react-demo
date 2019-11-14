import React from 'react';
import Autosize from 'autosize';
import PropTypes from 'prop-types';
import './textarea.scss';
export default class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.textarea = React.createRef();
        this.state = {
            count: props.value.length || 0
        };
    }
    bindAutosize() { Autosize(this.textarea.current); }
    updateAutoSize() { Autosize.update(this.textarea.current); }
    unbindAutosize() { Autosize.destroy(this.textarea.current); }
    changeHandler(e) {
        this.updateAutoSize();
        this.setState({
            count: e.target.value.length
        });
        this.props.onChange && this.props.onChange(e);
    }
    render() {
        const { value, name, maxlength, placeholder, showCount } = this.props;
        return (React.createElement("div", { className: "c-textarea" },
            React.createElement("textarea", { className: "c-textarea__entity", ref: this.textarea, value: value, name: name, maxLength: maxlength, placeholder: placeholder, onChange: this.changeHandler.bind(this) }),
            (showCount && maxlength) && React.createElement("div", { className: "c-textarea__count" },
                this.state.count,
                "/",
                maxlength)));
    }
    componentDidMount() {
        this.bindAutosize();
    }
    componentWillUnmount() {
        this.unbindAutosize();
    }
}
Textarea.propTypes = {
    maxlength: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    showCount: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};
Textarea.defaultProps = {
    showCount: false,
    placeholder: '请输入',
    value: ''
};
