import React from 'react'

interface IProps {
  value: number,
  size?: number,
  width?: number,
  defaultColor?: string,
  color?: string[],
  rotate?: number
}

export default class Progress extends React.Component<IProps> {
  render () {
    let {
      value,
      size = 100,
      width = 5,
      defaultColor = 'rgba(0, 0, 0, 0.1)',
      color = ['#FF5257', '#000', '#fff', '#09bb07'],
      rotate = 0
    } = this.props

    const r = size / 2 - width
    const coordinate = r + width
    const perimeter = Math.PI * size * value
    const px2rem = (px: number) => `${px / 37.5}rem`

    return (
      <svg style={{width: px2rem(size), height: px2rem(size), transform: `rotate(${rotate}deg)`}}>
        <circle cx={px2rem(coordinate)} cy={px2rem(coordinate)} r={px2rem(r)} stroke="url(#lineStyle)" strokeLinecap="round" strokeWidth={width} strokeDasharray={perimeter} fill="none"/>
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
    )
  }
}
