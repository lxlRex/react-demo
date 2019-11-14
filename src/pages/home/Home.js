import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import ProcessDemo from './components/process-demo/index';
import './home.scss';
import Page from '../decorator/Page';
let Home = class Home extends Component {
    render() {
        return (React.createElement("div", { className: "home" },
            React.createElement(ProcessDemo, null)));
    }
};
Home = tslib_1.__decorate([
    Page({ title: 'Process Demo', backgroundColor: '#f2f3f4', needLogin: false })
], Home);
export default Home;
