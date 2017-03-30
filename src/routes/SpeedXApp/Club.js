import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import s from './Club.style'

const otherDots = [
  ['1rem', '8.5rem'],
  ['16.875rem', '16.875rem'],
  ['20rem', '35rem'],
  ['25rem', '4.375rem'],
  ['37.5rem', '12.5rem'],
  ['38.75rem', '28rem'],
  ['43.75rem', '18.75rem'],
  ['50rem', '8.125rem'],
  ['55.1875rem', '31.875rem']
]

export default class Club extends React.Component {
  state = {
    inScreen: false,
    animated: false,
    lineWids: [
      ['43rem', '0'],
      ['20rem', '0'],
      ['11rem', '0'],
      ['9.5rem', '0'],
    ],
    dots: ['0 auto', '0 auto', '2.5rem auto', '0 auto']
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
      animated: false,
      lineWids: []
    })
    this.removeListener()
  }

  onScroll = () => {
    const thisHeight = ReactDOM.findDOMNode(this).offsetTop
    if (document.body.scrollTop + window.innerHeight > thisHeight + 800) {
      if (!this.state.inScreen && !this.state.animated) {
        this.setState({
          inScreen: true,
          animated: true,
          lineWids: [
            ['43rem', '43rem'],
            ['20rem', '20rem'],
            ['11rem', '11rem'],
            ['9.5rem', '9.5rem']
          ]
        })
        this.drawLines(0, 1000)
        this.drawDots(0, '2.5rem auto', 1000)
        this.drawLines(1, 2700)
        this.drawDots(1, '2.5rem auto', 2700)

        this.drawDots(2, '0 auto', 3200)
        this.drawLines(2, 3900)
        this.drawLines(3, 4900)
        this.drawDots(3, '2.5rem auto', 4900)
        this.removeListener()
      }
    } else if (this.state.inScreen) {
      this.setState({
        ...this.state,
        inScreen: false
      })
    }
  }

  drawDots = (idx, wid, time) => {
    setTimeout(()=>{
      const newDots = this.state.dots
      newDots[idx] = wid
      this.setState({
        ...this.state,
        dots: newDots
      })
    }, time)
  }

  drawLines = (idx, time) => {
    setTimeout(()=>{
      const newWids = this.state.lineWids
      newWids[idx][0] = '0'
      this.setState({
        ...this.state,
        lineWids: newWids
      })
    }, time)
  }

  removeListener = () => {
    if (window.innerWidth >= 960) {
      if (window.removeEventListener) {
        window.removeEventListener('scroll', this.onScroll, false)
      } else if (window.removeEvent) {
        window.removeEvent('onscroll', this.onScroll)
      }else {
        window.onscroll = null
      }
    }
  }
  render() {
    const { inScreen, animated, lineWids, dots } = this.state
    const start = inScreen && animated
    const otherDotNodes = start && otherDots.map((dot)=>{
      const delay = (Math.floor(Math.random() * 20) / 10 + 5.4) + 's'
      let scale = Math.random()
      if (scale < 0.4) {
        scale += 0.3
      }
      return (<div className={s.animation} style={{left: dot[0], top: dot[1], transform: 'scale(' + scale + ')', animationDelay: delay}}></div>)
    })
    return (
      <div className={classnames(s.club, this.props.className)}>
      	<h1><span>加入骑行俱乐部，</span><span>体验团队的力量</span></h1>
      	<p><span>建立你自己的骑行俱乐部，浏览俱乐部成员的最新动态；</span><span>发布活动、上传照片，沉淀俱乐部的丰富内容</span></p>
      	<div>
          <div className={s.dots}>
        		<div className={start && s.animation} style={{ backgroundSize: dots[0] }} />
        		<div className={start && s.animation} style={{ backgroundSize: dots[1] }} />
        		<div className={start && s.animation} style={{ backgroundSize: dots[2] }} />
        		<div className={start && s.animation} style={{ backgroundSize: dots[3] }} />
        		<div />
          </div>
          <div className={s.lines}>
            <div style={{ width: lineWids[0][0]}}>
              <div>
                <div style={{ width: lineWids[0][1]}} />
              </div>
            </div>
            <div style={{ width: lineWids[1][0]}}>
              <div>
                <div style={{ width: lineWids[1][1]}} />
              </div>
            </div>
            <div style={{ width: lineWids[2][0]}}>
              <div>
                <div style={{ width: lineWids[2][1]}} />
              </div>
            </div>
            <div style={{ width: lineWids[3][0]}}>
              <div>
                <div style={{ width: lineWids[3][1]}} />
              </div>
            </div>
          </div>
          <div className={s.otherDots}>
            { otherDotNodes }
          </div>
      	</div>
      </div>
    )
  }
}
