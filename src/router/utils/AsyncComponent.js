import React, { Component } from 'react';
export default function AsyncComponent(importComponent) {
    return class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }
        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({ component });
        }
        render() {
            const C = this.state.component;
            return C ? React.createElement(C, Object.assign({}, this.props)) : null;
        }
    };
}
