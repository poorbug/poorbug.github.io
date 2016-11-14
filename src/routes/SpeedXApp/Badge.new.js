import React from 'react'
import ReactDOM from 'react-dom'
import names from 'classnames'
import s from './Badge.new.style'

export default class Badge extends React.Component {
  state = {
    inScreen: false,
    animated: false,
    badges: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
      badges: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
    this.removeListener()
  }

  onScroll = () => {
    const thisHeight = ReactDOM.findDOMNode(this).offsetTop
    if (document.body.scrollTop + window.innerHeight > thisHeight + 800) {
      if (!this.state.inScreen && !this.state.animated) {
        this.setState({
          ...this.state,
          inScreen: true,
          animated: true
        })
        this.ranBadgeActive(0, 5, 300)
        this.ranBadgeActive(0, 5, 600)
        this.ranBadgeActive(6, 11, 900)
        this.ranBadgeActive(6, 11, 1200)
        this.ranBadgeActive(12, 17, 1500)
        this.ranBadgeActive(12, 17, 1800)
        this.removeListener()
      }
    } else if (this.state.inScreen) {
      this.setState({
        ...this.state,
        inScreen: false
      })
    }
  }

  ranBadgeActive = (sta, end, time) => {
    setTimeout(()=>{
      const badges = this.state.badges
      badges[Math.floor(Math.random() * (sta + 1 - end) + end)] = 1
      this.setState({
        ...this.state,
        badges: badges
      })
    }, time)
  }

  badgeOnclick = (idx) => {
    const badges = this.state.badges
    badges[idx] = 1
    this.setState({
      ...this.state,
      badges: badges
    })
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
    const { badges } = this.state
    const badgeNodes = badges.map((bdg, idx)=>{
      return (<i onClick={()=>this.badgeOnclick(idx)} className={names(s['badge' + (idx + 1)], badges[idx] ? s.active : '')}></i>)
    })
    return (
      <div className={s.badge}>
      	<h1>勋章活动，享受收集的乐趣</h1>
      	<p><span>通过一枚枚精心设计的勋章，</span><span>让你在骑行的同时享受到收集的乐趣。</span></p>
      	<div>
	      	{ badgeNodes }
      	</div>
      </div>
    )
  }
}
