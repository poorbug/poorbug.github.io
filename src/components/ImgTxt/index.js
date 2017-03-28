import React from 'react'
import s from './style'

export default class ImgTxt extends React.Component {
  state = {
    force: .3,
    moveX: 0,
    moveY: 0
  }

  componentDidMount() {
    this.img.addEventListener('touchforcechange', e => {
      e.preventDefault()
      const currentForce = e.changedTouches[0].force
      if (currentForce > .3) {
        this.setState({ force: currentForce })
      }
    }, false)

    let startX
    let startY
    this.img.addEventListener('touchstart', e => {
      startX = e.changedTouches[0].pageX
      startY = e.changedTouches[0].pageY
    }, false)

    this.img.addEventListener('touchmove', e => {
      this.setState({
        moveX: e.changedTouches[0].pageX - startX,
        moveY: e.changedTouches[0].pageY - startY
      })
    }, false)

    this.img.addEventListener('touchend', e => {
      setTimeout(() => {
        this.setState({
          force: .3,
          moveX: 0,
          moveY: 0
        })
      }, 0)
    }, false)
  }

  render() {
    const { img, txt } = this.props
    const { force, moveX, moveY } = this.state
    const scale = (force - .3) * 4 + 1
    return (
      <div className={s.imgtxt}>
        <img
          src={img}
          style={{
            transform: `matrix(${scale}, 0, 0, ${scale}, ${-moveX * 2}, ${-moveY * 2})`
          }}
          ref={ c => this.img = c }
        />
        <br />
        <p>{txt}</p>
      </div>
    )
  }
}