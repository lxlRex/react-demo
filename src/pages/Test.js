import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './home.scss';
class ColorPrinter {
    print(msg) {
        return `呵呵呵:${msg}`;
    }
}
let p1 = new ColorPrinter();
let fn1;
fn1 = (a, b) => {
    return false;
};
let arr;
arr = ['a', 'b'];
export default class Testtsx extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = () => {
            // console.log(this.props.tsx)
            let a;
            console.log(a);
            let b;
            b = 2213;
            console.log(b);
            let c = 3;
            console.log(c);
            console.log(p1.print('1111111'));
        };
        this.state = {
            tsx: true
        };
    }
    render() {
        let Types;
        (function (Types) {
            Types["text"] = "text";
            Types["password"] = "password";
            Types["tel"] = "tel";
            Types["number"] = "number";
        })(Types || (Types = {}));
        let a = Types.number;
        console.log(a);
        let arr = [1, 2, 3, 4, 'qqq'];
        return (React.createElement("div", { onClick: this.clickHandler.bind(this) }, arr.map(item => React.createElement("div", { className: className('testtsx', { 'qwer': item === 1 }), key: item }, item))));
    }
}
Testtsx.propTypes = {
    tsx: PropTypes.bool
};
Testtsx.defaultProps = {
    tsx: false
};
