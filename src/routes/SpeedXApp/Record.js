import React from 'react'
import classnames from 'classnames'
import s from './Record.style'

export default class Record extends React.Component {
  render() {
    return (
      <div className={classnames(s.record, this.props.className)}>
      	<h1>记录骑行，分享骑行生活</h1>
      	<p>
      		<span>实时记录速度、里程、时间、</span>
      		<span>卡路里、海拔等信息，</span>
      	</p>
      	<p>
      		<span>连接野兽SpeedForce后将拓展踏频、</span>
      		<span>心率等更多精准信息</span>
      	</p>
      	<div>
      		<img src='https://global.speedx.com/speedx/app/record1.png' />
      		<img src='https://global.speedx.com/speedx/app/record2.png' />
      		<img src='https://global.speedx.com/speedx/app/record3.png' />
      		<img src='https://global.speedx.com/speedx/app/record4.png' />
      	</div>
      </div>
    )
  }
}
