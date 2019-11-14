import React from 'react';
import PropTypes from 'prop-types';
export default class Countdown extends React.Component {
    constructor() {
        super(...arguments);
        this.interval = null;
        this.state = {
            currentTime: 0,
            isFinish: true
        };
    }
    countdown() {
        this.interval = setInterval(() => {
            if (this.state.currentTime > 1) {
                this.setState({
                    currentTime: this.state.currentTime - 1
                });
            }
            else {
                this.finishCountdown();
            }
        }, 1000);
    }
    finishCountdown() {
        clearInterval(this.interval);
        this.setState({
            isFinish: true
        });
    }
    componentWillReceiveProps(props) {
        if (props.start && this.state.isFinish) {
            this.setState({
                currentTime: props.time,
                isFinish: false
            });
            this.countdown();
        }
        else {
            this.finishCountdown();
        }
    }
    render() {
        return (React.createElement("div", { className: "c-countdown" }, this.props.children({ currentTime: this.state.currentTime, isFinish: this.state.isFinish })));
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}
Countdown.propTypes = {
    start: PropTypes.bool,
    children: PropTypes.func
};
Countdown.defaultProps = {
    start: false,
    time: 60
};
