import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import ProcessDemo from './components/process-demo/index';
import Page from '../decorator/Page';
let Home = class Home extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            buttons: [13, 20, -7, -12],
            bars: [16, 61, 23],
            limit: 140
        };
    }
    render() {
        let { buttons, bars, limit } = this.state;
        return (React.createElement("div", { className: "home", style: { paddingBottom: '200px' } },
            React.createElement(ProcessDemo, { buttons: buttons, bars: bars, limit: limit })));
    }
};
Home = tslib_1.__decorate([
    Page({ title: 'Process Demo', backgroundColor: '#f2f3f4', needLogin: false })
], Home);
export default Home;
