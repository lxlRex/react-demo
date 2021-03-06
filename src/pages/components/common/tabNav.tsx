import React, { Component } from 'react'
import { Tab, TabItem } from '../../../public/components/src/tab'
import RouterContainer from 'src/router/utils/router-container'

const tabList = [
  {
    name: '首页',
    path: '/index/home'
  },
  {
    name: '分类',
    path: '/index/classify'
  },
  {
    name: '我的',
    path: '/index/my'
  }
]

interface IProps {
  route: any
  history: any
  location: any
}

export default class TabNav extends Component<IProps, {}> {
  changeTab = (path: any): void => {
    if (path === this.props.location.pathname) return
    this.props.history.push(path)
  }

  render() {
    return (
      <div>
        <RouterContainer {...this.props} />
        <Tab>
          {
            tabList.map(({name, path}) => {
              return (
                <TabItem key={name} active={path === this.props.location.pathname}>
                  <div onClick={() => this.changeTab(path)}>{name}</div>
                </TabItem>
              )
            })
          }
        </Tab>
      </div>
    )
  }
}
