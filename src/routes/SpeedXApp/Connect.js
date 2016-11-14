import React from 'react'
import ReactDOM from 'react-dom'
import s from './Connect.style'

export default class Connect extends React.Component {
  state = {
    inScreen: false,
    animated: false,
    percent: 0,
    min: '00',
    second: '00',
    speed: '00',
    distance: '00'
  }

  componentDidMount() {
    if (window.innerWidth >= 960) {
      if (window.addEventListener) {
        window.addEventListener('scroll', this.onScroll, false)
      } else if (window.attachEvent) {
        window.attachEvent('onscroll', this.onScroll)
      } else {
        window.onscroll = this.onScroll
      }
    }
  }

  componentWillUnmount() {
    this.setState({
      inScreen: false,
      animated: false
    })
    this.removeListener()
  }

  onScroll = () => {
    const thisHeight = ReactDOM.findDOMNode(this).offsetTop
    if (document.body.scrollTop + window.innerHeight > thisHeight + 600) {
      if (!this.state.inScreen && !this.state.animated) {
        setTimeout(()=>{
          this.sync()
        }, 2000)
        this.setState({
          inScreen: true,
          animated: true
        })
        this.removeListener()
      }
    } else if (this.state.inScreen) {
      this.setState({
        ...this.state,
        inScreen: false
      })
    }
  }

  sync = () => {
    const { percent } = this.state
    if (percent >= 100) {
      this.increse()
    } else {
      this.setState({
        ...this.state,
        percent: percent + 10
      })
      setTimeout(this.sync, 100)
    }
  }

  increse = () => {
    const { min, second, speed, distance } = this.state
    if (min >= 23) {
      this.setState({
        ...this.state,
        min: 23,
        second: 46,
        speed: 23.8,
        distance: 32.2
      })
    } else {
      let newMin = parseInt(min, 10) + 2
      if (newMin < 10) {
        newMin = '0' + newMin
      }
      let newSecond = parseInt(second, 10) + 4
      if (newSecond < 10) {
        newSecond = '0' + newSecond
      }

      this.setState({
        ...this.state,
        min: newMin,
        second: newSecond,
        speed: (parseFloat(speed) + 2.3).toFixed(1),
        distance: (parseFloat(distance) + 3.2).toFixed(1)
      })
      setTimeout(this.increse, 100)
    }
  }

  removeListener = () => {
    if (window.innerWidth >= 960) {
      if (window.removeEventListener) {
        window.removeEventListener('scroll', this.onScroll, false)
      } else if (window.removeEvent) {
        window.removeEvent('onscroll', this.onScroll)
      }
    }
  }
  render() {
    const { inScreen, animated, percent, min, second, speed, distance } = this.state
    const mobile = window.innerWidth <= 960
    return (
      <div className={s.connect} >
      	<h1>连接你的 SpeedX 自行车</h1>
      	<p><span>野兽骑行 App 与 SpeedX 进行数据同步，</span><span>并把优质的骑行建议推送给你</span></p>
      	<div>
      		<div style={{marginLeft: inScreen && animated ? '25rem' : '9rem'}}>
      			<img src='https://global.speedx.com/speedx/app/app-data-old.png?imageView2/2/w/260' />
      			<p>00:<span>{min}</span>:<span>{second}</span></p>
      			<p>{speed}</p>
      			<p>{distance}</p>
      		</div>
      		<div>
      			<p>{ mobile ? '100' : percent}%</p>
      			<span></span>
      			<span style={{width: inScreen && animated ? '25rem' : '0'}}></span>
      		</div>
      		<div style={{marginLeft: inScreen && animated ? '-25rem' : '-9rem'}}>
      			<img src='https://global.speedx.com/speedx/app/control.png' />
      		</div>
      	</div>
      </div>
    )
  }
}
