import React, { Component } from 'react';
import './tab.scss';
export default class Tab extends Component {
    render() {
        return (React.createElement("ul", { className: "c-tab" }, this.props.children));
    }
}
