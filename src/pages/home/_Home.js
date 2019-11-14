import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import Button from '../../public/components/src/button';
import Input from '../../public/components/src/input';
import Textarea from '../../public/components/src/textarea';
import Loading from '../../public/components/src/loading';
import MessageBox from '../../public/components/src/messageBox';
import Toast from '../../public/components/src/toast';
import ImageUploader from '../../public/components/src/image-uploader';
import Checkbox from '../../public/components/src/checkbox';
import Radio from '../../public/components/src/radio';
import Countdown from '../../public/components/src/countdown';
import Checker from '../../public/components/src/checker';
import { Select, Option } from '../../public/components/src/select';
import browser from '../../public/utils/browser';
import Page from '../decorator/Page';
import Progress from '../../public/components/src/progress';
import Amount from '../../public/components/src/amount';
let Home = class Home extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: 'hello world',
            desc: '12312',
            images: '',
            options: [
                { label: '汉字', value: 1 },
                { label: '汉字1', value: 2 },
                { label: '汉字2', value: 3 },
                { label: '汉字3', value: 4 }
            ],
            checkbox: [1, 2],
            radio: 1,
            start: false
        };
    }
    componentWillMount() {
        console.log('home');
    }
    buttonClickHandler() {
    }
    buttonClickHandler2() {
        Loading.show();
        setTimeout(Loading.close, 3000);
    }
    inputChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    alertHandler() {
        MessageBox.alert({
            msg: '123',
            btnText: '阿萨德'
        }).then(() => {
            console.log(12323);
        });
    }
    confirmHandler() {
        MessageBox.confirm({
            msg: '阿斯蒂芬的',
            confirmBtn: '请问',
            cancelBtn: '按时'
        }).then(() => {
            console.log('confirm');
        }).catch(() => {
            console.log('cancel');
        });
    }
    getImages(value) {
        console.log(value);
    }
    toasthandler() {
        Toast.show({ msg: 'qqqweqwqewqweqasdf' }).then(() => {
            console.log('hide toast');
        });
    }
    start() {
        this.setState({ start: true });
    }
    render() {
        return (React.createElement("div", { className: "home", style: { paddingBottom: '200px' } },
            React.createElement(Input, { name: "title", showClear: true, label: "\u59D3\u540D\u59D3\u540D", placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D\u59D3\u540D", type: "text", value: this.state.title, onChange: this.inputChangeHandler.bind(this) }),
            React.createElement("input", { name: "title", ref: input => { this.input = input; }, type: "text", value: this.state.title, onChange: this.inputChangeHandler.bind(this) }),
            React.createElement(Button, { onClick: this.buttonClickHandler.bind(this) }, "\u554A\u963F\u8428\u5FB7"),
            React.createElement(Button, { onClick: this.buttonClickHandler2.bind(this) }, "showLoading"),
            React.createElement(Button, { onClick: this.alertHandler.bind(this) }, "alert"),
            React.createElement(Button, { onClick: this.confirmHandler.bind(this) }, "confirm"),
            React.createElement(Button, { onClick: this.toasthandler.bind(this) }, "toast"),
            React.createElement(Textarea, { name: "desc", value: this.state.desc, onChange: this.inputChangeHandler.bind(this), showCount: true, maxlength: 200 }),
            React.createElement("div", { style: { marginBottom: '30px' } }),
            React.createElement(ImageUploader, { value: this.state.images, onChange: this.getImages.bind(this) }),
            React.createElement(Checkbox, { options: this.state.options, value: this.state.checkbox, onChange: this.getImages.bind(this) }),
            React.createElement(Radio, { options: this.state.options, value: this.state.radio, onChange: this.getImages.bind(this) }),
            React.createElement(Countdown, { start: this.state.start, time: 6 }, ({ currentTime, isFinish }) => React.createElement("div", null, isFinish ? 'finish' : currentTime)),
            React.createElement(Button, { onClick: this.start.bind(this) }, "start"),
            React.createElement(Checker, { value: this.state.start, onChange: val => { this.setState({ start: val }); } }),
            React.createElement(Select, null, this.state.options.map(({ label, value }, index) => {
                return React.createElement(Option, { label: label, value: value, key: index });
            })),
            React.createElement(Progress, { value: this.state.start ? 0.5 : 0.7 },
                React.createElement(Amount, { value: this.state.start ? 50 : 70 }),
                "%")));
    }
    componentDidMount() {
        console.log(this);
        console.log(browser.Wechat);
    }
    componentWillUpdate() {
    }
    componentDidUpdate() {
    }
};
Home = tslib_1.__decorate([
    Page({ title: 'Test', backgroundColor: '#f2f3f4', needLogin: false })
], Home);
export default Home;
