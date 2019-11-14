import React, { Component } from 'react';
import './index.scss';
export default class extends Component {
    render() {
        const { value } = this.props;
        let styles = {
            width: `${value > 100 ? 100 : value}%`,
            ...(value > 100 && {
                background: 'red'
            })
        };
        return (React.createElement("div", { className: 'process-bar' },
            React.createElement("span", { className: 'process-bar__text' },
                value,
                "%"),
            React.createElement("div", { className: 'process-bar__content', style: styles })));
    }
}
