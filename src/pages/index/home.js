import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import Page from '../decorator/Page';
let Home = class Home extends Component {
    render() {
        return (React.createElement("div", null, "123"));
    }
};
Home = tslib_1.__decorate([
    Page({ title: '首页' })
], Home);
export default Home;
