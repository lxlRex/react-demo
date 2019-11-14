import React from 'react';
import Mask from '../../mask/index';
import './loading.scss';
import { CSSTransition } from 'react-transition-group';
import '../../../animation/fade.css';
export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.isShow = () => {
            return this.state.show;
        };
        this.show = () => {
            this.setState({ show: true });
        };
        this.hide = () => {
            this.setState({ show: false });
        };
    }
    render() {
        return (React.createElement(CSSTransition, { in: this.state.show, classNames: 'fade', timeout: 300, unmountOnExit: true },
            React.createElement(Mask, { bgColor: 'transparent' },
                React.createElement("div", { className: "loading" },
                    React.createElement("em", { className: "loading__img" })))));
    }
}
