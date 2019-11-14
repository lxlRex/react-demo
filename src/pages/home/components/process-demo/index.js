import React, { Component } from 'react';
import ProcessBar from '../process-bar';
import Button from '../../../../public/components/src/button';
import './index.scss';
export default class extends Component {
    render() {
        const { buttons, bars, limit } = this.props;
        return (React.createElement("div", { className: 'process-demo' },
            React.createElement("div", null, "Process Bars Demo"),
            bars.map((e, index) => {
                return (React.createElement("div", { key: index },
                    React.createElement(ProcessBar, { value: e })));
            }),
            React.createElement("div", { className: 'button-box' }, buttons.map((e, index) => {
                return (React.createElement("div", { key: index },
                    React.createElement(Button, null, e)));
            }))));
    }
}
