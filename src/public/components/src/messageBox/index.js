import React from 'react';
import ReactDOM from 'react-dom';
import Component, { Types } from './src/messageBox';
let instance = {
    [Types.alert]: null,
    [Types.confirm]: null
};
function createMessageBox({ type }) {
    const TypeMapper = {
        [Types.alert]: 'alert',
        [Types.confirm]: 'confirm'
    };
    let containerClassName = `${TypeMapper[type]}-container`;
    let container = document.createElement('div');
    container.className = containerClassName;
    document.body.appendChild(container);
    instance[type] = ReactDOM.render(React.createElement(Component, { type: type }), container);
}
export default class MessageBox {
    /**
     * @desc alert
     * @param {string} msg message
     * @param {string} btnText button text
     * @return {Promise<any>}
     */
    static alert({ msg, btnText = '确认' }) {
        return new Promise(resolve => {
            let type = Types.alert;
            if (!instance[type])
                createMessageBox({ type });
            instance[type].setState({ show: true, msg, confirmBtn: btnText, confirm: resolve });
        });
    }
    static confirm({ msg, confirmBtn, cancelBtn }) {
        return new Promise((resolve, reject) => {
            let type = Types.confirm;
            if (!instance[type])
                createMessageBox({ type });
            instance[type].setState({ show: true, msg, confirmBtn, cancelBtn, confirm: resolve, cancel: reject });
        });
    }
}
