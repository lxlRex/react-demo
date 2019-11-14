import React, { Component } from 'react';
import { Tab, TabItem } from '../../../public/components/src/tab';
import RouterContainer from 'src/router/utils/router-container';
const tabList = [
    {
        name: '首页',
        path: '/index/home'
    },
    {
        name: '分类',
        path: '/index/classify'
    },
    {
        name: '我的',
        path: '/index/my'
    }
];
export default class TabNav extends Component {
    constructor() {
        super(...arguments);
        this.changeTab = (path) => {
            if (path === this.props.location.pathname)
                return;
            this.props.history.push(path);
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(RouterContainer, Object.assign({}, this.props)),
            React.createElement(Tab, null, tabList.map(({ name, path }) => {
                return (React.createElement(TabItem, { key: name, active: path === this.props.location.pathname },
                    React.createElement("div", { onClick: () => this.changeTab(path) }, name)));
            }))));
    }
}
