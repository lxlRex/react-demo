import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import './home.scss'

// 对类约束
interface Tsx {
  print (msg: string): string
}

class ColorPrinter implements Tsx {
  print(msg: string): string {
    return `呵呵呵:${msg}`
  }
}

let p1 = new ColorPrinter()

// 对函数约束
type MyFunction = (a: string, b: number) => boolean

let fn1: MyFunction
fn1 = (a: string, b: number) => {
  return false
}

// 对数组
interface MyArray {
  [index: number]: string
}

let arr: MyArray
arr = ['a', 'b']

// 对json
interface MyJson {
  name: string,
  readonly age: number,
  email?: string
}

export default class Testtsx extends Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      tsx: true
    }
  }

  clickHandler = (): void => {
    // console.log(this.props.tsx)
    let a: undefined
    console.log(a)

    let b: number | string | boolean
    b =  2213
    console.log(b)

    let c = 3
    console.log(c)

    console.log(p1.print('1111111'))
  }

  render () {
    enum Types {text = 'text', password = 'password', tel = 'tel', number = 'number'}
    let a: Types = Types.number
    console.log(a)
    let arr: any[] = [1, 2, 3, 4, 'qqq']
    return (
      <div onClick={this.clickHandler.bind(this)}>
        { arr.map(item => <div className={className('testtsx', {'qwer': item === 1})} key={item}>{item}</div>) }
      </div>
    )
  }
}

(Testtsx as any).propTypes = {
  tsx: PropTypes.bool
};

(Testtsx as any).defaultProps = {
  tsx: false
}
