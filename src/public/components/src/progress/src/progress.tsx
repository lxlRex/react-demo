import React from 'react'
import './progress.scss'

interface IProps {
  value: number,
  size?: number,
  width?: number,
  defaultColor?: string,
  color?: string[],
  rotate?: number
}

export default class Progress extends React.Component<IProps> {
  state = {
    perimeter: 0
  }

  private readonly circle: React.RefObject<any>;

  constructor (props: any) {
    super(props)

    this.circle = React.createRef()
  }

  render () {
    let {
      value,
      size = 100,
      width = 5,
      defaultColor = 'rgba(0, 0, 0, 0.1)',
      color = ['#FF5257', '#000', '#fff', '#09bb07'],
      rotate = -90,
      children
    } = this.props

    const r = size / 2 - width // 半径
    const coordinate = r + width // 圆心坐标
    const perimeter = Math.PI * r * 2 // 周长
    console.log(perimeter)
    const px2rem = (px: number) => `${px / 37.5}rem`

    return (
      <div className="c-progress" style={{width: px2rem(size), height: px2rem(size)}}>
        <svg className="c-progress__svg" style={{transform: `rotate(${rotate}deg)`}}>
          <circle className="c-progress__circle" ref={this.circle} cx={px2rem(coordinate)}
                  cy={px2rem(coordinate)}
                  r={px2rem(r)} stroke="url(#lineStyle)"
                  strokeLinecap="round" strokeWidth={width}
                  strokeDasharray={px2rem(perimeter)}
                  strokeDashoffset={px2rem((1 - value) * perimeter)}
                  fill="none"
          >
            <animate attributeName="stroke-dashoffset" from={px2rem(perimeter)} to={px2rem((1 - value) * perimeter)} dur="0.3s"/>
          </circle>
          <circle cx={px2rem(coordinate)} cy={px2rem(coordinate)} r={px2rem(r)} stroke={defaultColor} strokeLinecap="round" strokeWidth={width} fill="none"/>
          <defs>
            <linearGradient id="lineStyle" x1="0%" y1="0%" x2="100%" y2="0%">
              {
                color.map((item, index) => {
                  let offset = 0
                  if (index === color.length - 1) {
                    offset = 100
                  } else if (index === 0) {
                    offset = 0
                  } else {
                    offset = index / (color.length - 1) * 100
                  }
                  return (
                    <stop offset={`${offset}%`} style={{stopColor: item}} key={index} />
                  )
                })
              }
            </linearGradient>
          </defs>
        </svg>
        <div className="c-progress__text">{children}</div>
      </div>
    )
  }

  componentDidMount(): void {
    // this.setState({perimeter: this.circle.current.getTotalLength()})
  }
}
