import React from 'react';
import Mask from '../../mask/index';
import './messageBox.scss';
import { CSSTransition } from 'react-transition-group';
import '../../../animation/fade.css';
export var Types;
(function (Types) {
    Types[Types["alert"] = 0] = "alert";
    Types[Types["confirm"] = 1] = "confirm";
})(Types || (Types = {}));
export default class MessageBox extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            msg: 'alert',
            cancelBtn: '取消',
            confirmBtn: '确定',
            confirm: () => { },
            cancel: () => { }
        };
    }
    cancelHandler() {
        this.closehandler();
        this.state.cancel();
    }
    confirmHandler() {
        this.closehandler();
        this.state.confirm();
    }
    closehandler() {
        this.setState({ show: false });
    }
    render() {
        return (React.createElement(CSSTransition, { in: this.state.show, classNames: 'fade', timeout: 300, unmountOnExit: true },
            React.createElement(Mask, null,
                React.createElement("div", { className: "message-box" },
                    React.createElement("div", { className: "message-box__msg" }, this.state.msg),
                    React.createElement("div", { className: "message-box__btnBox" },
                        this.props.type === Types.confirm &&
                            React.createElement("div", { className: "message-box__btn message-box__btn--cancel", onClick: this.cancelHandler.bind(this) }, this.state.cancelBtn),
                        React.createElement("div", { className: "message-box__btn", onClick: this.confirmHandler.bind(this) }, this.state.confirmBtn))))));
    }
}
MessageBox.defaultProps = {
    type: Types.alert
};
