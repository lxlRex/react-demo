import React from 'react';
export default class Option extends React.Component {
    render() {
        return (React.createElement("option", { value: this.props.value }, this.props.label));
    }
}
