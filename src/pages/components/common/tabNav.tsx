import React, { Component } from 'react'
import { Tab, TabItem } from '../../../public/components/src/tab'
import { renderRoutes } from 'react-router-config'

const tabList = [
  {
    name: '首页'
  },
  {
    name: '分类'
  }
]

interface IProps {
  route: any
}

interface IState {

}

export default class TabNav extends Component<IProps, IState> {
  render() {
    const { route: {routes} } = this.props

    return (
      <div>
        {renderRoutes(routes)}
        <Tab>
          {
            tabList.map(({name}) => {
              return (
                <TabItem key={name}>
                  <div>{name}</div>
                </TabItem>
              )
            })
          }
        </Tab>
      </div>
    )
  }
}
