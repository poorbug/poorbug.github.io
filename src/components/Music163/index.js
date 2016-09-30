import React from 'react'
import s from './style'

export default class Music163 extends React.Component {
  render() {
  	const { width = 320, height = 86, auto = 1 } = this.props
    return (
      <div>
				<iframe 
					className={s.music} 
					width={width}
					height={height}
					src={`http://music.163.com/outchain/player?type=2&id=28164935&auto=${auto}&height=66`} />
      </div>
    )
  }
}
