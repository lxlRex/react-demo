import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import './home.scss'

interface Tsx {
  print (msg: string): string
}

class ColorPrinter implements Tsx {
  print(msg: string): string {
    return `呵呵呵:${msg}`
  }
}

let p1 = new ColorPrinter()

export default class Testtsx extends Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      tsx: true
    }
  }

  clickHandler = ():void => {
    // console.log(this.props.tsx)
    let a: undefined
    console.log(a)

    let b: number | string | boolean
    b = 213
    console.log(b)

    let c = 3
    console.log(c)

    console.log(p1.print('1111111'))
  }

  render () {
    enum Types {text = 'text', password = 'password', tel = 'tel', number = 'number'}
    let a:Types = Types.number
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
