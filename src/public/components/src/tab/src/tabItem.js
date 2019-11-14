import React, { Component } from 'react';
import classNames from 'classnames';
export default class TabItem extends Component {
    render() {
        return (React.createElement("li", { className: classNames({ 'active': this.props.active }) }, this.props.children));
    }
}
