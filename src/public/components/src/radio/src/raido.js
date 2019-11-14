import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types'
import './radio.scss';
export default class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options.map((e) => ({
                ...e,
                checked: props.value === e.value
            }))
        };
    }
    clickHandler(index) {
        if (this.state.options[index].checked)
            return;
        let newOptions = this.state.options.map(e => ({ ...e, checked: false }));
        newOptions[index].checked = true;
        this.setState({
            options: newOptions
        });
        this.props.onChange && this.props.onChange(newOptions[index].value);
    }
    render() {
        return (React.createElement("div", { className: "c-radio" }, this.state.options.map(({ label, checked }, index) => {
            return (React.createElement("div", { className: classNames('c-radio__item', { 'c-radio__item--checked': checked }), key: index, onClick: this.clickHandler.bind(this, index) }, label));
        })));
    }
}
