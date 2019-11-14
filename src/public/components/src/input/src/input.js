import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './input.scss';
export default class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            clearShow: false,
            isFocus: false
        };
    }
    changeHandler(e) {
        this.props.onChange && this.props.onChange(e);
    }
    focusHandler() {
        this.setState({ isFocus: true });
    }
    blurHandler() {
        setTimeout(() => {
            this.setState({ isFocus: false });
        }, 0);
    }
    clearHandler() {
        this.props.value && this.props.onChange && this.props.onChange({ target: { name: this.props.name, value: '' } });
    }
    render() {
        return (React.createElement("div", { className: "c-input" },
            this.props.label && React.createElement("div", { className: "c-input__left" }, this.props.label),
            React.createElement("div", { className: "c-input__right" },
                React.createElement("input", { className: "c-input__entity", type: this.props.type, value: this.props.value, name: this.props.name, placeholder: this.props.placeholder, onFocus: this.focusHandler.bind(this), onBlur: this.blurHandler.bind(this), onChange: this.changeHandler.bind(this) }),
                this.props.showClear &&
                    React.createElement("div", { className: className('c-input__clear', { 'c-input__clear--hide': !(this.props.showClear && String(this.props.value).length > 0 && this.state.isFocus) }), onClick: this.clearHandler.bind(this) }))));
    }
}
Input.propTypes = {
    showClear: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'number', 'tel', 'password']),
    placeholder: PropTypes.string
};
Input.defaultProps = {
    showClear: false,
    type: 'text',
    placeholder: '请输入'
};
