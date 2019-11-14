import React from 'react';
import { lock, unlock } from 'tua-body-scroll-lock';
import './mask.scss';
export default class Mask extends React.Component {
    constructor(props) {
        super(props);
        this.mask = React.createRef();
    }
    render() {
        const { bgColor, maskClick = () => { }, children } = this.props;
        return (React.createElement("div", { className: 'c-mask' },
            React.createElement("div", { className: 'c-mask__bg', style: { backgroundColor: bgColor } }),
            React.createElement("div", { className: 'c-mask__content', ref: this.mask, onClick: maskClick }, children)));
    }
    componentDidMount() {
        lock(this.mask.current);
    }
    componentWillUnmount() {
        unlock(this.mask.current);
    }
}
Mask.defaultProps = {
    // scroll: false,
    bgColor: 'rgba(0, 0, 0, .5)'
};
