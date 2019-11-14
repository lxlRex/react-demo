import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import Page from '../decorator/Page';
import Input from '../../public/components/src/input';
import Button from '../../public/components/src/button';
import { login } from '../../api/user';
import { User } from '../../public/class';
// interface IState {
//   userName: string
//   password: string
// }
let Login = class Login extends Component {
    // interface IState {
    //   userName: string
    //   password: string
    // }
    constructor() {
        super(...arguments);
        this.state = {
            userName: '',
            password: ''
        };
    }
    inputChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async login() {
        let { data } = await login(this.state);
        await User.login(data);
        const query_params = new URLSearchParams(this.props.location.search);
        const backUrl = query_params.get('backUrl');
        if (backUrl) {
            location.href = decodeURIComponent(backUrl);
        }
        else {
            this.props.history.push('/');
        }
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "login" }, "login"),
            React.createElement(Input, { name: "userName", value: this.state.userName, type: "text", placeholder: "\u8D26\u53F7", onChange: this.inputChangeHandler.bind(this) }),
            React.createElement(Input, { name: "password", value: this.state.password, type: "password", placeholder: "\u5BC6\u7801", onChange: this.inputChangeHandler.bind(this) }),
            React.createElement(Button, { onClick: this.login.bind(this) }, "login")));
    }
};
Login = tslib_1.__decorate([
    Page({ title: '登录', needLogin: false })
], Login);
export default Login;
