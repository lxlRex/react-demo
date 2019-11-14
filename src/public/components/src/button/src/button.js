import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';
export default class Button extends Component {
    clickHandler() {
        if (this.props.disabled)
            return;
        this.props.onClick && this.props.onClick();
    }
    render() {
        return (React.createElement("div", { className: classNames('c-button', { 'c-button--disabled': this.props.disabled }), onClick: this.clickHandler.bind(this) }, this.props.children));
    }
}
Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};
Button.defaultProps = {
    disabled: false
};
