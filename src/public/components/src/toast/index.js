import React from 'react';
import ReactDOM from 'react-dom';
import Component from './src/toast';
const containerClassName = 'toast-container';
let instance = null;
let queue = [];
function createToast() {
    let container = document.createElement('div');
    container.className = containerClassName;
    document.body.appendChild(container);
    instance = ReactDOM.render(React.createElement(Component, null), container);
}
function showToast({ msg, delay = 3000, callBack = () => { } }) {
    if (!instance)
        createToast();
    if (instance.isShow()) {
        queue.push({ msg, delay, callBack });
        return;
    }
    instance.show(msg).then(() => {
        setTimeout(() => {
            instance.hide().then(() => {
                callBack();
                queue.length && showToast(queue.shift());
            });
        }, delay);
    });
}
export default class Toast {
    static show({ msg, delay = 3000 }) {
        return new Promise(resolve => {
            showToast({ msg, delay, callBack: resolve });
        });
    }
    static destory() {
        let container = document.querySelector(containerClassName);
        if (instance || container) {
            instance = null;
            ReactDOM.unmountComponentAtNode(container);
            container.parentNode && container.parentNode.removeChild(container);
        }
    }
}
