import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types'
import './checkbox.scss';
export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options.map((e) => ({ ...e, checked: props.value.indexOf(e.value) > -1 }))
        };
    }
    clickHandler(index) {
        let newOptions = this.state.options.slice(0);
        newOptions[index].checked = !newOptions[index].checked;
        this.setState({
            options: newOptions
        });
        this.props.onChange && this.props.onChange(newOptions.filter(({ checked }) => checked).map(({ value }) => value));
    }
    render() {
        return (React.createElement("div", { className: "c-checkbox" }, this.state.options.map(({ label, checked }, index) => {
            return (React.createElement("div", { className: classNames('c-checkbox__item', { 'c-checkbox__item--checked': checked }), key: index, onClick: this.clickHandler.bind(this, index) }, label));
        })));
    }
}
