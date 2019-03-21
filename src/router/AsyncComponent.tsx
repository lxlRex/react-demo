import React, { Component } from 'react'

interface IState {
  component: any
}

export default function AsyncComponent (importComponent: () => PromiseLike<{ default: any }>) {
  class AsyncComponent extends Component<null, IState> {
    constructor (props: any) {
      super(props)

      this.state = {
        component: null
      }
    }

    async componentDidMount () {
      const { default: component } = await importComponent()

      this.setState({ component })
    }

    render () {
      const C = this.state.component

      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}
