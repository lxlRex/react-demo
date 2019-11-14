import React, { Component } from 'react';
import ProcessBar from '../process-bar';
import Button from '../../../../public/components/src/button';
import './index.scss';
export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            buttons: [13, 20, -7, -12],
            bars: [16, 61, 23],
            limit: 140,
            selected: 0
        };
        /**
         * @desc change event
         * @param e
         */
        this.selectChangeHandler = (e) => {
            this.setState({ selected: e.target.value });
        };
        /**
         * @desc click event
         * @param e
         */
        this.buttonClickHander = (e) => {
            let { bars, selected, limit } = this.state;
            bars[selected] = bars[selected] + e;
            if (bars[selected] < 0)
                bars[selected] = 0;
            if (bars[selected] > limit)
                bars[selected] = limit;
            this.setState({ bars });
        };
    }
    render() {
        let { buttons, bars, limit } = this.state;
        return (React.createElement("div", { className: 'process-demo' },
            React.createElement("h2", null, "Process Bars Demo"),
            bars.map((e, index) => {
                return (React.createElement("div", { key: index },
                    React.createElement(ProcessBar, { value: e, limit: limit })));
            }),
            React.createElement("div", { className: 'button-box' },
                React.createElement("select", { name: "process", className: 'process-select', onChange: this.selectChangeHandler }, bars.map((e, index) => {
                    return (React.createElement("option", { value: index, key: index },
                        "#process",
                        index + 1));
                })),
                buttons.map((e, index) => {
                    return (React.createElement("div", { key: index },
                        React.createElement(Button, { onClick: () => this.buttonClickHander(e) }, e)));
                }))));
    }
}
