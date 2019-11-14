import React, { Component } from 'react';
import './index.scss';
export default class extends Component {
    render() {
        const { value } = this.props;
        return (React.createElement("div", { className: 'process-bar' },
            React.createElement("span", { className: 'process-bar__text' },
                value,
                "%"),
            React.createElement("div", { className: 'process-bar__content', style: { width: `${value}%` } })));
    }
}
