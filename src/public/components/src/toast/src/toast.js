import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './toast.scss';
import '../../../animation/fade.css';
export default class Toast extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            msg: ''
        };
    }
    isShow() {
        return this.state.show;
    }
    show(msg) {
        return new Promise(resolve => {
            this.setState({ show: true, msg }, resolve);
        });
    }
    hide() {
        return new Promise(resolve => {
            this.setState({ show: false }, resolve);
        });
    }
    render() {
        return (React.createElement(CSSTransition, { in: this.state.show, classNames: 'fade', timeout: 300, unmountOnExit: true },
            React.createElement("div", { className: classNames('c-toast') },
                React.createElement("div", { className: "c-toast__text" }, this.state.msg))));
    }
}
